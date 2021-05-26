<template>
    <div>
        <h4>Messages</h4>
        <ul v-for="items in messages" :key="items">
            <li>{{ items }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [
                "hello", "hi", "gilang"
            ]
        }
    }
}
</script>
