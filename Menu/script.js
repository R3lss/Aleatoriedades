const toggleMenu = () => {
    const burguerMenu = document.querySelector(".menu-icon");
    const src = burguerMenu.getAttribute('src');
    const iconName = src === 'https://raw.githubusercontent.com/atherosai/ui/21ecb82dd3974c226fd74f9962d14a275d11e65b/menu-01/burger-menu.svg' ? close.svg: 'https://raw.githubusercontent.com/atherosai/ui/21ecb82dd3974c226fd74f9962d14a275d11e65b/menu-01/burger-menu.svg';


    burguerMenu.setAttribute(
        'src', iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation-mobile'
    );
}