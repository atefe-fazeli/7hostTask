# 7hostTask

A Next.js-based web application for displaying cryptocurrency data, built with React Bootstrap and powered by the CoinGecko API. The project features a responsive landing page and a dynamic currencies page with lazy loading and infinite scrolling.

## Features

- **Landing Page**: A welcoming homepage with a navigation bar linking to the currencies page.
- **Currencies Page** (`/currencies`):
  - Displays a table of cryptocurrencies with:
    - Image
    - Name
    - Symbol
    - Current price (USD)
    - Last updated (formatted in Persian date, e.g., 1403/12/05)
  - Fetches data dynamically from the CoinGecko API.
  - Implements **infinite scrolling** with lazy loading to fetch more data as the user scrolls.
  - After 4 pages of data, a **"Load More"** button appears to fetch additional data.
  - Clicking a currency open a detailed modal.
- **Responsive Design**: Built with React Bootstrap and SCSS, based on a provided Figma design.
- **SEO & Performance**: Optimized using Next.js best practices for speed and search engine visibility.

## Tech Stack

- **Framework**: Next.js
- **Design System**: React Bootstrap (`^2.10.9`), Bootstrap (`^5.3.5`)
- **Styling**: SASS (`^1.86.3`)
- **API Requests**: Axios (`^1.8.4`)
- **Date Formatting**: React Multi Date Picker (`^4.5.2`) for Persian date conversion
- **Carousel/Slider**: Swiper (`^11.2.6`)
- **API**: [CoinGecko API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atefe-fazeli/7hostTask.git
## Navigate to the project directory
- cd 7host-task
## Install dependencies
- npm install
## Run the development server
- npm run dev
## Open http://localhost:3000 in your browser
## Usage
- Visit the landing page at /.
- Click the "Currency" link in the navbar to view the currencies list at /currencies.
- Scroll down to lazy-load more data or click "Load More" after 4 pages.
- Click any currency row to view its details at modal.
## API
- The project uses the CoinGecko API to fetch cryptocurrency data:
- Endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1
## Optimization
- Efficient API Fetching: Uses Axios with proper state management to minimize redundant requests.
- Lazy Loading: Infinite scrolling ensures data is loaded only when needed.
- Performance: Optimized rendering with React Bootstrap and minimal DOM updates.
## Design
- The UI is built based on a Figma design provided here.

## Dependencies
{
  - "sass": "^1.86.3",
  - "swiper": "^11.2.6",
  - "react-bootstrap": "^2.10.9",
  - "axios": "^1.8.4",
  - "bootstrap": "^5.3.5",
  - "react-multi-date-picker": "^4.5.2"
    
}
