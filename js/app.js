// === SOUP Presentation JS ===

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '64px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.flexDirection = 'column';
            navLinks.style.background = 'var(--bg-secondary)';
            navLinks.style.padding = '16px 24px';
            navLinks.style.borderBottom = '1px solid var(--border)';
            navLinks.style.gap = '16px';
        });
    }

    // Demo feed data
    const demoFeed = document.getElementById('demo-feed');
    const demoTabs = document.querySelectorAll('.demo-tabs button');
    
    const demoData = {
        all: [
            {
                type: 'video',
                title: 'Seasonal Planting Guide: March 2026',
                body: 'Step-by-step walkthrough of preparing fields for the first rains. Tools, timing, and seed selection for Western Uganda soils.',
                meta: '2 days ago',
                footer: ['▶ 1,204 views', '💬 24 comments', '⬇ 89 downloads']
            },
            {
                type: 'blog',
                title: 'Understanding Soil pH Without a Lab',
                body: 'Three field tests you can do today with household items. Accurate enough for smallholder decisions. Includes a printable decision tree.',
                meta: '5 days ago',
                footer: ['👁 892 views', '💬 18 comments', '↗ 12 forks']
            },
            {
                type: 'file',
                title: 'planting_calendar_2026.pdf',
                body: 'Complete monthly calendar for maize, beans, and groundnuts. PDF + editable CSV. Community-verified with 3 contributors.',
                meta: '1 week ago',
                footer: ['⬇ 456 downloads', '✓ SHA-256 verified', '📋 CC-BY-SA']
            },
            {
                type: 'video',
                title: 'Composting in Dry Season',
                body: 'How to retain moisture in compost heaps when rainfall is sparse. 18-minute deep dive with Dr. Katureebe.',
                meta: '2 weeks ago',
                footer: ['▶ 2,341 views', '💬 67 comments', '⬇ 156 downloads']
            },
            {
                type: 'file',
                title: 'drip_irrigation_parts_list.xlsx',
                body: 'Bill of materials for a 50-meter drip line. Prices from Ishaka market, March 2026. Updated weekly by community.',
                meta: '2 weeks ago',
                footer: ['⬇ 312 downloads', '✓ SHA-256 verified', '📋 GPL-3.0']
            }
        ],
        video: [
            {
                type: 'video',
                title: 'Seasonal Planting Guide: March 2026',
                body: 'Step-by-step walkthrough of preparing fields for the first rains. Tools, timing, and seed selection for Western Uganda soils.',
                meta: '2 days ago',
                footer: ['▶ 1,204 views', '💬 24 comments', '⬇ 89 downloads']
            },
            {
                type: 'video',
                title: 'Composting in Dry Season',
                body: 'How to retain moisture in compost heaps when rainfall is sparse. 18-minute deep dive with Dr. Katureebe.',
                meta: '2 weeks ago',
                footer: ['▶ 2,341 views', '💬 67 comments', '⬇ 156 downloads']
            }
        ],
        blog: [
            {
                type: 'blog',
                title: 'Understanding Soil pH Without a Lab',
                body: 'Three field tests you can do today with household items. Accurate enough for smallholder decisions. Includes a printable decision tree.',
                meta: '5 days ago',
                footer: ['👁 892 views', '💬 18 comments', '↗ 12 forks']
            }
        ],
        file: [
            {
                type: 'file',
                title: 'planting_calendar_2026.pdf',
                body: 'Complete monthly calendar for maize, beans, and groundnuts. PDF + editable CSV. Community-verified with 3 contributors.',
                meta: '1 week ago',
                footer: ['⬇ 456 downloads', '✓ SHA-256 verified', '📋 CC-BY-SA']
            },
            {
                type: 'file',
                title: 'drip_irrigation_parts_list.xlsx',
                body: 'Bill of materials for a 50-meter drip line. Prices from Ishaka market, March 2026. Updated weekly by community.',
                meta: '2 weeks ago',
                footer: ['⬇ 312 downloads', '✓ SHA-256 verified', '📋 GPL-3.0']
            }
        ]
    };

    function renderFeed(items) {
        if (!demoFeed) return;
        demoFeed.innerHTML = '';
        
        const typeIcons = {
            video: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
            blog: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
            file: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
        };
        
        items.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'demo-item';
            el.style.animationDelay = `${index * 60}ms`;
            el.innerHTML = `
                <div class="demo-item-header">
                    <div class="demo-item-type ${item.type}">${typeIcons[item.type]}</div>
                    <span class="demo-item-title">${item.title}</span>
                    <span class="demo-item-meta">${item.meta}</span>
                </div>
                <div class="demo-item-body">${item.body}</div>
                <div class="demo-item-footer">
                    ${item.footer.map(f => `<span>${f}</span>`).join('')}
                </div>
            `;
            demoFeed.appendChild(el);
        });
    }

    // Tab switching
    demoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            demoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const key = tab.dataset.tab;
            renderFeed(demoData[key] || demoData.all);
        });
    });

    // Initial render
    renderFeed(demoData.all);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Intersection Observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation styles to sections
    document.querySelectorAll('.lane-card, .trust-card, .comparison-card, .channels-demo, .stack-diagram').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
