// 1. تشغيل AOS
AOS.init({ duration: 1000, once: false, mirror: true });

// 2. تشغيل Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 15, speed: 400, glare: true, "max-glare": 0.2
});

// 3. الماوس المخصص M
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
}
animateFollower();

// 4. تأثير الهوفر على الماوس
document.querySelectorAll('a, button, .tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        cursor.innerHTML = ''; 
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        cursor.innerHTML = 'M';
    });
});

// 5. تأثير الكتابة Typewriter
const typedTextSpan = document.querySelector(".typewriter");
const textArray = ["Full Stack Developer", "PHP Specialist", "UI/UX Designer", "Laravel Expert"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});
const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const sideLinks = document.querySelectorAll('.side-links a');

// فتح وقفل القائمة
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    sideMenu.classList.toggle('active');
});

// قفل القائمة فوراً عند الضغط على أي لينك
sideLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        sideMenu.classList.remove('active');
    });
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // بنسيب الاسم يظهر براحته لمدة ثانيتين
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // مسح اللودر من الصفحة بعد ما يختفي عشان الماوس يشتغل
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2500); 
});
const magneticButtons = document.querySelectorAll('.btn, .logo, .contact-item i');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        // تحريك العنصر بنسبة 30% من حركة الماوس عشان يكون التأثير ناعم
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', function(e) {
        // إرجاع العنصر لمكانه الأصلي بمجرد خروج الماوس
        btn.style.transform = 'translate(0px, 0px)';
    });
});

console.log(
    "%c🚀 Mina Ishak Dev Tools", 
    "color: #00f2ff; font-size: 25px; font-weight: bold; text-shadow: 0 0 10px #00f2ff;"
);
console.log(
    "%cأهلاً بك يا زميلي المبرمج! أعجبك الكود؟ لا تتردد في مراسلتي للتعاون.", 
    "color: #006eff; font-size: 14px;"
);