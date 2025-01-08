<script setup>
const {locale, setLocale} = useI18n()

// Change language
const changeLanguage = (newLocale) => {
    setLocale(newLocale)
}
</script>
<template>
    <div>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('fa')">Persian</button>
    </div>
</template>