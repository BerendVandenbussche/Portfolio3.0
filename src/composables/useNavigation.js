import { ref } from "vue";

const navigationItems = ref(["Home", "About", "Skills", "Homelab"]);
const isMobileMenuOpen = ref(false);

export const useNavigation = () => {
  const getNavigationItems = () => {
    return navigationItems.value;
  };

  const addNavigationItem = (item) => {
    navigationItems.value.push(item);
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  return {
    getNavigationItems,
    addNavigationItem,
    toggleMobileMenu,
    isMobileMenuOpen,
  };
};
