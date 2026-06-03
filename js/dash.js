 document.addEventListener('DOMContentLoaded', () => {
    const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipEls.forEach(el => new bootstrap.Tooltip(el));
  });

  // ── Hambúrguer / Sidebar mobile ──
  function toggleSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const btn      = document.getElementById('hamburgerBtn');
    const overlay  = document.getElementById('sidebarOverlay');
    const isOpen   = sidebar.classList.contains('open');

    if (isOpen) {
      closeSidebar();
    } else {
      sidebar.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn     = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('sidebarOverlay');

    sidebar.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Fecha sidebar ao pressionar Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSidebar();
  });

  // Fecha sidebar ao clicar em um link (mobile)
  document.querySelectorAll('.sidebar .nav-item-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 991) closeSidebar();
    });
  });

  // ── Toggle sub-menu sidebar ──
  function toggleSubMenu(btn) {
    const arrow    = btn.querySelector('.nav-arrow');
    const targetId = btn.getAttribute('aria-controls');
    const target   = document.getElementById(targetId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', String(!expanded));
    arrow.classList.toggle('open', !expanded);

    if (expanded) {
      target.style.maxHeight = '0';
      target.style.overflow  = 'hidden';
    } else {
      target.style.maxHeight = target.scrollHeight + 'px';
      target.style.overflow  = 'visible';
    }
  }

  // ── Ações da tabela (demo) ──
  document.querySelectorAll('.btn-approve').forEach(btn => {
    btn.addEventListener('click', () => {
      const row    = btn.closest('tr');
      const badge  = row.querySelector('.badge-status');
      badge.textContent = 'Ativo';
      badge.className   = 'badge-status badge-ativo';
      btn.disabled = true;
      btn.textContent = 'Aprovado';
    });
  });

  document.querySelectorAll('.btn-deactivate').forEach(btn => {
    btn.addEventListener('click', () => {
      const row   = btn.closest('tr');
      const badge = row.querySelector('.badge-status');
      badge.textContent = 'Inativo';
      badge.className   = 'badge-status badge-inativo';
      btn.disabled = true;
      btn.textContent = 'Desativado';
    });
  });