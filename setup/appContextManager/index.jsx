import ApiProvider from "./apiContext";
import { ThemeProvider } from "./themeContext";

function ContexManager({ children }) {
  return (
    
      <ApiProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ApiProvider>
    
  );
}

export default ContexManager;
