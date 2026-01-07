// 按钮波纹效果
const btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', function(e) {
        // 弹出提示
        alert('你点击了按钮！接下来可以学习更多前端知识～');
        
        // 波纹效果（定位鼠标点击位置）
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// 平滑滚动（点击导航跳转到锚点时更流畅）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 页面加载完成后提示
window.onload = function() {
    console.log('网站加载完成！');
};