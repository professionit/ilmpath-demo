/* ILM PATH Network - Shared JavaScript */

// ==================== LOGIN MODAL ====================
function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => modal.querySelector('.modal-content')?.classList.add('modal-enter'), 10);
  }
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function navigateToPortal(portal) {
  closeLoginModal();
  const routes = {
    'student': 'student/dashboard.html',
    'teacher': 'teacher/dashboard.html',
    'admin': 'admin/dashboard.html',
    'superadmin': 'superadmin/dashboard.html',
    'guardian': 'guardian/dashboard.html',
    'accountant': 'accountant/dashboard.html',
    'verifier': 'verifier/dashboard.html',
    'volunteer': 'volunteer-portal/dashboard.html',
    'team_leader': 'teamleader-portal/overview.html'
  };
  if (routes[portal]) {
    window.location.href = routes[portal];
  }
}

// ==================== VOLUNTEER MODAL ====================
function openVolunteerModal() {
  const modal = document.getElementById('volunteerModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeVolunteerModal() {
  const modal = document.getElementById('volunteerModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function submitVolunteerForm() {
  closeVolunteerModal();
  const successModal = document.getElementById('volunteerSuccessModal');
  if (successModal) {
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
  }
}

function closeVolunteerSuccessModal() {
  const modal = document.getElementById('volunteerSuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==================== JOB APPLICATION MODAL ====================
function openJobApplication(title) {
  const modal = document.getElementById('jobApplicationModal');
  const titleEl = document.getElementById('jobApplicationTitle');
  if (titleEl) titleEl.textContent = title;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  const fileInput = document.getElementById('jobAppResume');
  if (fileInput) fileInput.value = '';
  const fileName = document.getElementById('jobAppFileName');
  if (fileName) { fileName.textContent = ''; fileName.classList.add('hidden'); }
}

function closeJobApplicationModal() {
  const modal = document.getElementById('jobApplicationModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function submitJobApplication() {
  const name = document.getElementById('jobAppName')?.value?.trim();
  const email = document.getElementById('jobAppEmail')?.value?.trim();
  const phone = document.getElementById('jobAppPhone')?.value?.trim();
  const cover = document.getElementById('jobAppCover')?.value?.trim();
  const experience = document.getElementById('jobAppExperience')?.value;

  if (!name || !email || !phone || !cover || !experience) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  closeJobApplicationModal();
  const successModal = document.getElementById('jobSuccessModal');
  if (successModal) {
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
  }
}

function closeJobSuccessModal() {
  const modal = document.getElementById('jobSuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==================== ENROLLMENT MODAL ====================
function openEnrollment(course) {
  const modal = document.getElementById('enrollmentModal');
  const titleEl = document.getElementById('enrollmentCourseTitle');
  if (titleEl) titleEl.textContent = course;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeEnrollmentModal() {
  const modal = document.getElementById('enrollmentModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function submitEnrollment() {
  const name = document.getElementById('enrollName')?.value?.trim();
  const email = document.getElementById('enrollEmail')?.value?.trim();
  const phone = document.getElementById('enrollPhone')?.value?.trim();
  const age = document.getElementById('enrollAge')?.value;
  const schedule = document.getElementById('enrollSchedule')?.value;
  const experience = document.getElementById('enrollExperience')?.value;

  if (!name || !email || !phone || !age || !schedule || !experience) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  closeEnrollmentModal();
  const successModal = document.getElementById('enrollSuccessModal');
  if (successModal) {
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
  }
}

function closeEnrollSuccessModal() {
  const modal = document.getElementById('enrollSuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
    menu.classList.toggle('mobile-menu-enter');
  }
}

// ==================== PORTAL SIDEBAR TOGGLE ====================
function togglePortalSidebar() {
  const sidebar = document.querySelector('.sidebar-fixed');
  const overlay = document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
}

function closePortalSidebar() {
  const sidebar = document.querySelector('.sidebar-fixed');
  const overlay = document.querySelector('.sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

// ==================== PROFILE DROPDOWN ====================
function toggleProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('block');
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('profileDropdown');
  const trigger = document.getElementById('profileTrigger');
  if (dropdown && trigger && !dropdown.contains(e.target) && !trigger.contains(e.target)) {
    dropdown.classList.add('hidden');
    dropdown.classList.remove('block');
  }
});

// ==================== FAQ ACCORDION ====================
function toggleFaq(index) {
  const allContents = document.querySelectorAll('.faq-content');
  const allIcons = document.querySelectorAll('.faq-icon');
  
  allContents.forEach((content, i) => {
    if (i === index) {
      content.classList.toggle('open');
      content.classList.toggle('hidden');
    } else {
      content.classList.remove('open');
      content.classList.add('hidden');
    }
  });
  
  allIcons.forEach((icon, i) => {
    if (i === index) {
      icon.classList.toggle('rotate-180');
    } else {
      icon.classList.remove('rotate-180');
    }
  });
}

// ==================== SIDEBAR TOGGLE (MOBILE) ====================
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar-fixed');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) {
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('hidden');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar-fixed');
  const overlay = document.getElementById('sidebarOverlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.add('hidden');
}

// ==================== NOTIFICATION TOGGLE ====================
function toggleNotifications() {
  const panel = document.getElementById('notificationPanel');
  if (panel) {
    panel.classList.toggle('hidden');
    panel.classList.toggle('block');
  }
}

// ==================== SCROLL HEADER ====================
function initScrollHeader() {
  const header = document.querySelector('.scroll-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-lg', 'py-3');
        header.classList.remove('py-5');
      } else {
        header.classList.remove('shadow-lg', 'py-3');
        header.classList.add('py-5');
      }
    });
  }
}

// ==================== SEARCH FUNCTIONALITY ====================
function initSearch(inputId, itemsSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  
  input.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll(itemsSelector);
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

// ==================== TABLE SORTING ====================
function sortTable(tableId, columnIndex, type = 'string') {
  const table = document.getElementById(tableId);
  if (!table) return;
  
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  rows.sort((a, b) => {
    const aVal = a.cells[columnIndex].textContent.trim();
    const bVal = b.cells[columnIndex].textContent.trim();
    
    if (type === 'number') {
      return parseFloat(aVal.replace(/[^0-9.-]/g, '')) - parseFloat(bVal.replace(/[^0-9.-]/g, ''));
    }
    return aVal.localeCompare(bVal);
  });
  
  rows.forEach(row => tbody.appendChild(row));
}

// ==================== FORM VALIDATION ====================
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.classList.add('border-red-500');
      isValid = false;
    } else {
      field.classList.remove('border-red-500');
    }
  });
  
  return isValid;
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 text-white font-medium text-sm transition-all transform translate-y-0 ${
    type === 'success' ? 'bg-green-500' : 
    type === 'error' ? 'bg-red-500' : 
    type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==================== MODAL GENERIC ====================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==================== CONFIRM DIALOG ====================
function confirmAction(message, callback) {
  if (confirm(message)) {
    callback();
  }
}

// ==================== PRINT PAGE ====================
function printPage() {
  window.print();
}

// ==================== COPY TO CLIPBOARD ====================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!');
  });
}

// ==================== FORMAT CURRENCY ====================
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// ==================== FORMAT DATE ====================
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    year: 'numeric', month: 'short', day: 'numeric' 
  });
}

// ==================== INIT ON LOAD ====================
document.addEventListener('DOMContentLoaded', function() {
  initScrollHeader();
  
  // Close modals on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(modal => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
    }
  });
});
