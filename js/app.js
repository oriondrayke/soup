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

    // Demo data
    const demoData = {
        channels: [
            {
                id: 'austin-farming',
                name: 'Austin Farming',
                handle: 'austin-farming',
                desc: 'Practical agriculture for the Texas Hill Country. Tools, seasons, yields.',
                color: 'linear-gradient(135deg,#22c55e,#16a34a)',
                initials: 'AF',
                posts: 14,
                collections: 3,
                contributors: 2
            },
            {
                id: 'detroit-makers',
                name: 'Detroit Makers',
                handle: 'detroit-makers',
                desc: 'Open-source hardware, CNC files, and workshop notes from the Rust Belt.',
                color: 'linear-gradient(135deg,#f59e0b,#d97706)',
                initials: 'DM',
                posts: 5,
                collections: 2,
                contributors: 4
            },
            {
                id: 'medical-notes',
                name: 'Medical Notes',
                handle: 'medical-notes',
                desc: 'Study materials, case reviews, and reference sheets.',
                color: 'linear-gradient(135deg,#3b82f6,#2563eb)',
                initials: 'MN',
                posts: 32,
                collections: 8,
                contributors: 1
            },
            {
                id: 'ai-agent-logs',
                name: 'AI Agent Logs',
                handle: 'ai-agent-logs',
                desc: 'Autonomous agent outputs, tool chains, and experiment records.',
                color: 'linear-gradient(135deg,#a855f7,#7c3aed)',
                initials: 'AI',
                posts: 8,
                collections: 1,
                contributors: 3
            }
        ],
        items: {
            'austin-farming': [
                {
                    type: 'video',
                    title: 'Seasonal Planting Guide: March 2026',
                    body: 'Step-by-step walkthrough of preparing fields for the first rains. Tools, timing, and seed selection for Texas Hill Country soils.',
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
                    body: 'Complete monthly calendar for tomatoes, peppers, and squash. PDF + editable CSV. Community-verified with 3 contributors.',
                    meta: '1 week ago',
                    footer: ['⬇ 456 downloads', '✓ SHA-256 verified', '📋 CC-BY-SA']
                },
                {
                    type: 'video',
                    title: 'Composting in Dry Season',
                    body: 'How to retain moisture in compost heaps when rainfall is sparse. 18-minute deep dive with Dr. Martinez.',
                    meta: '2 weeks ago',
                    footer: ['▶ 2,341 views', '💬 67 comments', '⬇ 156 downloads']
                },
                {
                    type: 'file',
                    title: 'drip_irrigation_parts_list.xlsx',
                    body: 'Bill of materials for a 50-meter drip line. Prices from Austin farmers market, March 2026. Updated weekly by community.',
                    meta: '2 weeks ago',
                    footer: ['⬇ 312 downloads', '✓ SHA-256 verified', '📋 GPL-3.0']
                }
            ],
            'detroit-makers': [
                {
                    type: 'file',
                    title: 'cnc_router_plates.dxf',
                    body: 'Aluminum router plates for 6040 CNC. DXF + STEP files. Tested at Detroit makerspace.',
                    meta: '3 days ago',
                    footer: ['⬇ 89 downloads', '✓ SHA-256 verified', '📋 MIT']
                },
                {
                    type: 'video',
                    title: 'Building a $200 Dust Collector',
                    body: 'Full build log with parts from Harbor Freight and Amazon. 23 minutes.',
                    meta: '1 week ago',
                    footer: ['▶ 4,102 views', '💬 41 comments', '⬇ 203 downloads']
                }
            ],
            'medical-notes': [
                {
                    type: 'blog',
                    title: 'ECG Interpretation Checklist',
                    body: 'Systematic approach to reading 12-lead ECGs. Mnemonics, red flags, and common traps.',
                    meta: '1 day ago',
                    footer: ['👁 2,104 views', '💬 56 comments', '↗ 34 forks']
                }
            ],
            'ai-agent-logs': [
                {
                    type: 'blog',
                    title: 'Tool-Use Pattern: Retrieval-Augmented Generation',
                    body: 'Agent loop architecture for RAG with local LLMs. Code snippets and failure modes.',
                    meta: '4 days ago',
                    footer: ['👁 567 views', '💬 12 comments', '↗ 8 forks']
                },
                {
                    type: 'file',
                    title: 'agent_config_v3.yaml',
                    body: 'Standard config template for autonomous agents using the MCP protocol.',
                    meta: '2 weeks ago',
                    footer: ['⬇ 234 downloads', '✓ SHA-256 verified', '📋 Apache-2.0']
                }
            ]
        }
    };

    let currentChannel = null;
    let currentTab = 'all';

    const demoMain = document.getElementById('demo-main');
    const demoUrl = document.getElementById('demo-url');

    function getTypeIcon(type) {
        const icons = {
            video: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
            blog: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
            file: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
        };
        return icons[type] || icons.blog;
    }

    function renderItem(item, index) {
        const el = document.createElement('div');
        el.className = 'demo-item';
        el.style.animationDelay = `${index * 60}ms`;
        el.innerHTML = `
            <div class="demo-item-header">
                <div class="demo-item-type ${item.type}">${getTypeIcon(item.type)}</div>
                <span class="demo-item-title">${item.title}</span>
                <span class="demo-item-meta">${item.meta}</span>
            </div>
            <div class="demo-item-body">${item.body}</div>
            <div class="demo-item-footer">
                ${item.footer.map(f => `<span>${f}</span>`).join('')}
            </div>
        `;
        return el;
    }

    function renderChannelView(channel) {
        currentChannel = channel;
        if (demoUrl) demoUrl.textContent = `soup.local/c/${channel.handle}`;

        const items = demoData.items[channel.id] || [];
        const filteredItems = currentTab === 'all' ? items : items.filter(i => i.type === currentTab);

        demoMain.innerHTML = '';

        // Back button
        const backBtn = document.createElement('button');
        backBtn.className = 'demo-back-btn';
        backBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg> Back to Home`;
        backBtn.addEventListener('click', renderHomeView);
        demoMain.appendChild(backBtn);

        // Channel header
        const header = document.createElement('div');
        header.className = 'demo-channel-header';
        header.innerHTML = `
            <div class="demo-channel-avatar" style="background:${channel.color}">${channel.initials}</div>
            <div class="demo-channel-meta">
                <h3>${channel.name} <span class="verified">✓</span></h3>
                <p>${channel.desc}</p>
                <div class="demo-channel-stats">
                    <span>${channel.posts} posts</span>
                    <span>${channel.collections} collections</span>
                    <span>${channel.contributors} contributors</span>
                </div>
            </div>
        `;
        demoMain.appendChild(header);

        // Tabs
        const tabs = document.createElement('div');
        tabs.className = 'demo-tabs';
        ['all', 'video', 'blog', 'file'].forEach(tab => {
            const btn = document.createElement('button');
            btn.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
            btn.className = tab === currentTab ? 'active' : '';
            btn.dataset.tab = tab;
            btn.addEventListener('click', () => {
                currentTab = tab;
                renderChannelView(channel);
            });
            tabs.appendChild(btn);
        });
        demoMain.appendChild(tabs);

        // Feed
        const feed = document.createElement('div');
        feed.className = 'demo-feed';
        if (filteredItems.length === 0) {
            feed.innerHTML = '<p style="color:var(--text-muted);font-size:0.875rem;padding:20px 0;">No posts in this lane yet.</p>';
        } else {
            filteredItems.forEach((item, i) => feed.appendChild(renderItem(item, i)));
        }
        demoMain.appendChild(feed);
    }

    function renderHomeView() {
        currentChannel = null;
        currentTab = 'all';
        if (demoUrl) demoUrl.textContent = 'soup.local/home';

        demoMain.innerHTML = '';

        const homeHeader = document.createElement('div');
        homeHeader.className = 'demo-home-header';
        homeHeader.innerHTML = `
            <h4>Home</h4>
            <p>Channels you follow · ${demoData.channels.length} active</p>
        `;
        demoMain.appendChild(homeHeader);

        const feed = document.createElement('div');
        feed.className = 'demo-home-feed';

        demoData.channels.forEach((ch, i) => {
            const row = document.createElement('div');
            row.className = 'demo-channel-row';
            row.style.animationDelay = `${i * 80}ms`;
            row.innerHTML = `
                <div class="demo-channel-row-avatar" style="background:${ch.color}">${ch.initials}</div>
                <div class="demo-channel-row-info">
                    <strong>${ch.name}</strong>
                    <span>${ch.desc}</span>
                </div>
                <div class="demo-channel-row-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
                </div>
            `;
            row.addEventListener('click', () => renderChannelView(ch));
            feed.appendChild(row);
        });

        demoMain.appendChild(feed);
    }

    // Initial render
    renderHomeView();

    // Sidebar nav clicks (just visual, resets to home)
    document.querySelectorAll('.demo-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.demo-nav a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            renderHomeView();
        });
    });

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

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

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

    document.querySelectorAll('.lane-card, .trust-card, .manifesto-card, .channels-demo, .stack-diagram, .demo-channel-row').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});
