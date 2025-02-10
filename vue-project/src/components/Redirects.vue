<template>
    <div class="social-links">
        <a href="https://github.com/RasmusLiltorp" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://github.com/RNVC-Tech" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i> RNVC
        </a>
        <a href="https://www.linkedin.com/in/rasmus-liltorp-69234a290/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i> LinkedIn
        </a>
    </div>
</template>

<script>
export default {
    name: "Redirects",
};
</script>

<style scoped>
.social-links {
    display: flex;
    gap: 1rem;
}
.social-links a {
    text-decoration: none;
    color: #55b5ba;
}
</style>
