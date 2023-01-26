<template>
    <div>
        <header>
            <Navbar/>
            <Kategoriler/>
        </header>
        <body>
            <slot/>
        </body>

        <footer>
            <AltFooter/>
           </footer>
    </div>
</template>