<template>
    <div class="container py-24">

        
        <div class="flex flex-col gap-x-12 gap-y-10 md:flex-row flex-wrap justify-center items-center">
            
            <nuxt-link to="/blog/sql-injection" class="blog-card border-1 border-gray-400 rounded-md transition ease-in delay-150 duration-200 bg-slate-100 hover:bg-slate-200 md:w-2/5 h-max py-8 px-4">
                <div class="blog-title text-black font-bold mb-2 text-center" >
                   Use SQL Injection to extract informations from database.
                </div>
                <div class="blog-image">
                    <img src="/img/sql_classic/sql_injection.jpeg" alt="" class="mx-auto w-9/10 object-fit h-48 rounded-md border-gray-200">
                </div>
                <div class="text-gray-600 mt-2 italic flex flex-row justify-start gap-2">
                    <div class="text-left bg-slate-600 text-gray-50 px-2 py-1 rounded-sm text-sm" >#SQL</div>
                    <div class="text-left bg-teal-600 text-gray-50 px-2 py-1 rounded-sm text-sm" >#hack</div>
                </div>
                <div class="flex flew-row justify-between mt-2 items-end italic">
                    <div class="text-gray-500 "> 3 min read</div>
                    <div class="text-right italic text-gray-400">Feb, 29 2024</div>
                </div>
            </nuxt-link>

            <nuxt-link to="/blog/sql-blind-injection" class="blog-card border-1 border-gray-400 rounded-md transition ease-in delay-150 duration-200 bg-slate-100 hover:bg-slate-200  md:w-2/5 h-max py-8 px-4">
                <div class="blog-title text-black font-bold mb-2 text-center">
                    How to exploit Blind sql injection vulnerability ?
                </div>
                <div class="blog-image">
                    <img src="/img/sql_blind/sql_blind.webp" alt="" class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200">
                </div>
                <div class="text-gray-600 mt-2 italic flex flex-row justify-start gap-2">
                    <div class="text-left bg-slate-600 text-gray-50 px-2 py-1 rounded-sm text-sm" > #SQL</div>
                    <div class="text-left bg-teal-600 text-gray-50 px-2 py-1 rounded-sm text-sm" > #hack</div>
                    <div class="text-left bg-amber-400 text-gray-50 px-2 py-1 rounded-sm text-sm" > #Python</div>
                </div>

                <div class="flex flew-row justify-between mt-2 items-end italic">
                    <div class="text-gray-500"> 8 min read</div>
                    <div class="text-right text-gray-400">Feb, 29 2024</div>
                </div>
            </nuxt-link>

            <!-- <div class="blog-card border-1 border-gray-400 rounded-md bg-slate-100 hover:bg-slate-200 md:w-2/5 h-max py-10 px-4">
                <div class="blog-title text-black font-bold mb-2">
                    How to exploit Sql blind injection vulnerabbility ?
                </div>
                <div class="blog-image">
                    <img src="/img/sql_classic/sql_injection.jpeg" alt="" class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200">
                </div>
                <div class="text-gray-600 mt-2 italic flex flex-row justify-between">
                    <div class="text-left" > @aethelwulf</div>
                    <div class="text-right">Feb, 29 2024</div>
                </div>
            </div>

            <div class="blog-card border-1 border-gray-400 rounded-md bg-slate-100 hover:bg-slate-200 md:w-2/5 h-max py-10 px-4">
                <div class="blog-title text-black font-bold mb-2">
                    How to exploit Sql blind injection vulnerabbility ?
                </div>
                <div class="blog-image">
                    <img src="/img/sql_classic/sql_injection.jpeg" alt="" class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200">
                </div>
                <div class="text-gray-600 mt-2 italic flex flex-row justify-between">
                    <div class="text-left" > @aethelwulf</div>
                    <div class="text-right">Feb, 29 2024</div>
                </div>
            </div> -->

            <!-- <div class="blog-card border-1 border-gray-400 rounded-md bg-slate-100 hover:bg-slate-200 md:w-2/5 h-max py-10 px-4">
                <div class="blog-title text-black font-bold mb-2">
                    How to exploit Sql blind injection vulnerabbility ?
                </div>
                <div class="blog-image">
                    <img src="/img/sql_classic/sql_injection.jpeg" alt="" class="mx-auto w-9/10 object-cover object-center h-48 border rounded-md border-gray-200">
                </div>
                <div class="text-gray-600 mt-2 italic flex flex-row justify-between">
                    <div class="text-left" > @aethelwulf</div>
                    <div class="text-right">Feb, 29 2024</div>
                </div>
            </div> -->

        </div>
       
    </div>
</template>