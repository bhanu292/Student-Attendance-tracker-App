const { createApp } = Vue;

createApp({
    methods: {
        goto(role) {
            if (role === "teacher") {
                window.location.href = "pages/login.html?role=teacher";
            } else {
                window.location.href = "pages/login.html?role=student";
            }
        }
    }
}).mount("#app");
