document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  
  const sidebarToggleButton = document.getElementById('sidebar-toggle-btn');
  const toggleMainIcon = document.querySelector('.toggle-main-icon'); // The main toggle icon
  const parentLinks = document.querySelectorAll('.parent-link');

  // Function to toggle the overall sidebar state
  sidebarToggleButton.addEventListener('click', function () {
    sidebar.classList.toggle('collapsed');
    // Toggle rotation of the main toggle icon
    toggleMainIcon.classList.toggle('rotate-180');

    // Close all submenus when the main sidebar is collapsed
    if (sidebar.classList.contains('collapsed')) {
      document.querySelectorAll('.submenu.active').forEach(openSubmenu => {
        openSubmenu.classList.remove('active');
        const openSubmenuParentLink = openSubmenu.previousElementSibling;
        if (openSubmenuParentLink) {
          openSubmenuParentLink.querySelector('.arrow-icon').classList.remove('rotate');
        }
      });
    }
  });

  // Logic for individual submenu toggling
  parentLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      // If sidebar is collapsed, expand it first
      if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        toggleMainIcon.classList.remove('rotate-180'); // Reset main icon rotation
      }

      // Get the target submenu ID from the data-target attribute
      const targetId = this.dataset.target;
      const submenu = document.getElementById(targetId);
      const arrowIcon = this.querySelector('.arrow-icon');

      // Close all other open submenus
      document.querySelectorAll('.submenu.active').forEach(openSubmenu => {
        if (openSubmenu !== submenu) {
          openSubmenu.classList.remove('active');
          // Find the corresponding arrow icon and reset its rotation
          const openSubmenuParentLink = openSubmenu.previousElementSibling;
          if (openSubmenuParentLink) {
            openSubmenuParentLink.querySelector('.arrow-icon').classList.remove('rotate');
          }
        }
      });

      // Toggle the 'active' class on the clicked submenu
      submenu.classList.toggle('active');
      // Toggle the 'rotate' class on the arrow icon
      arrowIcon.classList.toggle('rotate');
    });
  });
});
