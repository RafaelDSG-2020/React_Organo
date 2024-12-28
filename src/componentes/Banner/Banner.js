import { DarkMode } from '../DarkMode/DarkMode';
import './Banner.css';

// function Banner() {
//     // JSX
//     return (
//         <header className="banner">
//             <img src="/imagens/banner.png" alt="O banner principal da pagina do Organo" />
//         </header>
        
//     );
// }

// export default Banner;

export const Banner = () => {
        // JSX
        return (
            <header className="banner">
                <DarkMode />
                <img src="/imagens/banner.png" alt="O banner principal da pagina do Organo" />
            </header>
            
        );
    }
    
