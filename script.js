document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');
    let currentLang = localStorage.getItem('lang') || 'fa';

    const translations = {
        "fa": {
            "page_title": "حمیدرضا عطاری",
            "hero_name": "حمیدرضا عطاری",
            "hero_subtitle": "فعال حوزه ارتباطات و توسعه دهنده بک اند",
            "about_me_title": "درباره من :",
            "about_me_item_1": "🧠 من یک توسعه‌دهنده پرشور بک‌اند هستم که به لینوکس و اسکریپت‌نویسی علاقه دارم.",
            "about_me_item_2": "🔭 در حال حاضر روی جنگو و سیستم‌های VoIP (استریسک + AGI) کار می‌کنم.",
            "about_me_item_3": "🧰 همیشه در حال بهبود مهارت‌های خود و تعیین اهداف جدید هستم.",
            "about_me_item_4": "💬 برای ارتقاء مهارت‌های بک‌اند و تبدیل شدن به یک توسعه‌دهنده حرفه‌ای فول-استک، روی جنگو تمرکز کرده‌ام.",
            "my_skills_title": "مهارت‌های من :",
            "languages_title": "زبان‌ها :",
            "frameworks_title": "فریم‌ورک‌ها :",
            "database_title": "پایگاه داده :",
            "virtualization_networking_title": "مجازی‌سازی و شبکه :",
            "operating_systems_title": "سیستم‌عامل‌ها :",
            "tools_title": "ابزارها :",
            "other_title": "سایر :",
            "social_title": "بیایید در مورد کد، قهوه یا ایده‌های دیوانه صحبت کنیم :",
            "github_stats_title": "آمار گیت‌هاب :",
            "copyright": "تمامی حقوق برای حمیدرضا عطاری محفوظ است."
        },
        "en": {
            "page_title": "Hamid Reza Atari",
            "hero_name": "Hamid Reza Atari",
            "hero_subtitle": "Communications professional and backend developer",
            "about_me_title": "About Me :",
            "about_me_item_1": "🧠 I'm a passionate <strong>Backend Developer</strong> with a love for <strong>Linux</strong> & scripting",
            "about_me_item_2": "🔭 Currently working on Django , and VoIP systems (Asterisk + AGI)",
            "about_me_item_3": "🧰 Always improving my <strong>skills</strong> and setting new <strong>goals</strong>",
            "about_me_item_4": "💬 Focused on Django to level up my backend skills and become a professional full-stack developer.",
            "my_skills_title": "My Skills :",
            "languages_title": "Languages :",
            "frameworks_title": "Frameworks :",
            "database_title": "Database :",
            "virtualization_networking_title": "Virtualization & Networking :",
            "operating_systems_title": "Operating Systems :",
            "tools_title": "Tools :",
            "other_title": "Other :",
            "social_title": "Let's talk code, coffee, or crazy ideas :",
            "github_stats_title": "GitHub Stats :",
            "copyright": "All rights reserved for Hamid Reza Atari."
        }
    };

    // Function to update the DOM with the selected language
    function updateContent(lang) {
        const langData = translations[lang];

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                element.innerHTML = langData[key];
            }
        });

        // Update page direction and language attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

        // Update language switcher button text
        langSwitcher.textContent = lang === 'fa' ? 'EN' : 'FA';
    }

    // Event listener for the language switcher button
    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'fa' ? 'en' : 'fa';
        localStorage.setItem('lang', currentLang);
        updateContent(currentLang);
    });

    // Function to create snowflakes
    function createSnowflakes() {
        const snowContainer = document.getElementById('snow-container');
        if (!snowContainer) return;

        for (let i = 0; i < 150; i++) {
            let snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
            snowContainer.appendChild(snowflake);
        }
    }

    // Initial content load and snowflake creation
    updateContent(currentLang);
    createSnowflakes();
});
