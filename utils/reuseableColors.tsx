import { useColorScheme } from 'react-native';
import className from 'twrnc'; // Assuming you are using twrnc for tailwindcss styling

const ReUseableStyles = () => {
  const currentMode = useColorScheme();

  return {
    background : currentMode === 'light' ? 'bg-[#ffffff]' : 'bg-[#0e1a32]',
    text: currentMode === 'dark' ? 'text-[#ffffff]' : 'text-gray-800'
  }
};

export default  ReUseableStyles;
