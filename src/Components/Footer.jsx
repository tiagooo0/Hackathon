export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    // Funciones para crear iconos SVG
    const FacebookIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
      </svg>
    );
  
    const TwitterIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 3C22.1 3.35 21.2 3.58 20.2 3.69C21.2 3.08 22 2.13 22.4 1C21.5 1.55 20.5 1.95 19.4 2.17C18.5 1.23 17.3 0.67 16 0.67C13.5 0.67 11.5 2.67 11.5 5.17C11.5 5.53 11.5 5.89 11.6 6.23C7.8 6.03 4.4 4.23 2.2 1.5C1.8 2.19 1.6 2.97 1.6 3.81C1.6 5.39 2.4 6.79 3.6 7.59C2.8 7.59 2 7.37 1.3 7.03V7.07C1.3 9.27 2.8 11.13 4.8 11.55C4.4 11.65 4 11.71 3.6 11.71C3.3 11.71 3 11.69 2.7 11.65C3.3 13.47 5 14.79 7 14.83C5.4 16.05 3.4 16.77 1.2 16.77C0.8 16.77 0.4 16.75 0 16.71C2 18.01 4.4 18.77 7 18.77C16 18.77 20.7 11.77 20.7 5.77C20.7 5.57 20.7 5.37 20.7 5.17C21.6 4.47 22.4 3.57 23 2.57V3Z" />
      </svg>
    );
  
    const InstagramIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
      </svg>
    );
  
    const LinkedinIcon = () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
        <path d="M6 9H2V21H6V9Z" />
        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
      </svg>
    );
  
    return (
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">ClimApp</h2>
              <p className="text-sm">Innovación y calidad en cada detalle</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <LinkedinIcon />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; {currentYear} ClimApp. Todos los derechos reservados.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }