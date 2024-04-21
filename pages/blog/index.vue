<template>
    <div class="container py-24">
        <div class="flex flex-col gap-2 md:gap-x-12 md:gap-y-10 md:flex-row flex-wrap justify-start items-center">
            
            <nuxt-link class="one-project border-t-4 border-green-400 " to="/blog/data-viz-rsyslog">
                <div class="project-image mx-auto">
                  <img class="w-full h-48 object-cover object-center rounded-md " src="/img/rsyslog/socanalyst.png" alt="pentest">
                </div>
                <div class="project-name mt-2 text-bold">
                    Data viz with syslog-ng & rsyslog
                </div>
                <div class="project-description py-2">
                    Collect firewall logs in real time and save it in a SQL database.
                </div>
                <div class="flex justify-start gap-4">
                    <div class="px-2 py-2 bg-gray-500 hover:bg-sky-700 text-white rounded-md text-xs text-bold">SOC</div>
                </div>
                <div class="flex justify-between mt-2 italic w-full  border-t-2 border-gray-300">
                    <div class="text-gray-500"> 4 min read</div>
                    <div class="text-right italic text-gray-400">Apr, 13 2024</div>
                </div>
            </nuxt-link>
            
            <nuxt-link class="one-project border-t-4 border-red-300 " to="/blog/audit-pentest">
                <div class="project-image mx-auto">
                  <img class="w-full h-48 object-cover object-center rounded-md " src="/img/audit_box/home.png" alt="pentest">
                </div>
                <div class="project-name mt-2 text-bold">
                    Pentest app web
                </div>
                <div class="project-description py-2">
                    Audit d'une app web sur un environnement de test
                </div>
                <div class="flex justify-start gap-4">
                    <div class="px-2 py-2 bg-gray-400 hover:bg-red-500  text-white rounded-md text-xs text-bold">Hack</div>
                    <div class="px-2 py-2 bg-gray-500 hover:bg-cyan-500 text-white rounded-md text-xs text-bold">Pentest</div>
                    <div class="px-2 py-2 bg-gray-700 hover:bg-sky-700 text-white rounded-md text-xs text-bold">French</div>
                </div>
                <div class="flex justify-between mt-2 italic w-full  border-t-2 border-gray-300">
                    <div class="text-gray-500"> 18 min read</div>
                    <div class="text-right italic text-gray-400">Mar, 14 2024</div>
                </div>
            </nuxt-link>

            <nuxt-link class="one-project border-t-4 border-sky-300 " to="/blog/data-viz-elk">
                <div class="project-image mx-auto">
                  <img class="w-full h-48 object-cover object-center rounded-md " src="/img/elk/elk_filebeat1.png" alt="elk filebeat">
                </div>
                <div class="project-name mt-2 text-bold">
                    Security & data visualization
                </div>
                <div class="project-description py-2">
                    How to configure ELK containers and filebeat to view firewall logs in real time ?
                </div>
                <div class="flex justify-start gap-4">
                    <div class="px-2 py-2 bg-gray-700 hover:bg-sky-700 text-white rounded-md text-xs text-bold">SOC</div>
                    <div class="px-2 py-2 bg-gray-500 hover:bg-yellow-500 text-white rounded-md text-xs text-bold">ELK</div>
                </div>
                <div class="flex justify-between mt-2 italic w-full  border-t-2 border-gray-300">
                    <div class="text-gray-500"> 5 min read</div>
                    <div class="text-right italic text-gray-400">Mar, 10 2024</div>
                </div>
            </nuxt-link>
            
            <nuxt-link class="one-project border-t-4 border-sky-700" to="/blog/sql-injection">
                <div class="project-image mx-auto">
                  <img class="w-full object-cover object-center h-48 rounded-md" src="/img/sql_classic/sql_injection.jpeg" alt="sql injection classic">
                </div>
                <div class="project-name mt-2 text-bold">
                    SQL injection classic
                </div>
                <div class="project-description py-2 ">
                    Use SQL Injection to extract informations from database.
                </div>
                <div class="flex justify-start gap-4">
                    <div class="px-2 py-2 bg-gray-400 hover:bg-red-800 text-white rounded-md text-xs text-bold">Hack</div>
                </div>
                <div class="flex justify-between mt-2 italic w-full border-t-2 border-gray-300">
                    <div class="text-gray-500"> 3 min read</div>
                    <div class="text-right italic text-gray-400">Feb, 25 2024</div>
                </div>
            </nuxt-link>

            <nuxt-link class="one-project border-t-4 border-gray-700" to="/blog/sql-blind-injection">
                <div class="project-image mx-auto">
                  <img class="w-full object-cover object-center h-48 border rounded-md border-gray-200" src="/img/sql_blind/sql_blind.webp" alt="blind sql injection">
                </div>
                <div class="project-name mt-2 text-bold">
                    Blind sql injection
                </div>
                <div class="project-description py-2">
                    How to exploit Blind sql injection vulnerability ?
                </div>
                <div class="flex justify-start gap-4">
                    <div class="px-2 py-2 bg-gray-400 hover:bg-red-800 text-white rounded-md text-xs text-bold">Hack</div>
                    <div class="px-2 py-2 bg-gray-600 hover:bg-teal-700 text-white rounded-md text-xs text-bold">Python</div>
                </div>
                <div class="flex justify-between mt-2 italic w-full border-t-2 border-gray-300">
                    <div class="text-gray-500">8 min read</div>
                    <div class="text-right italic text-gray-400">Feb, 29 2024</div>
                </div>
            </nuxt-link>

        </div>
    </div>
</template>