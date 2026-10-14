# Kedai Takjil React + Vite Version

This is a modernized version of the Kedai Takjil e-commerce website, rebuilt with React and Vite for better performance and developer experience.

## 📋 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar with routing
│   ├── Footer.jsx      # Footer component
│   ├── ProductList.jsx # Product listing component
│   ├── CartList.jsx    # Shopping cart display
│   ├── PopupCart.jsx   # Cart success popup
│   └── PopupCheckout.jsx # Checkout form popup
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with featured products
│   ├── Products.jsx    # Full product catalog and cart
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact information page
├── hooks/              # Custom React hooks
│   └── useCart.js      # Cart state management
├── utils/              # Utility functions
│   └── formatPrice.js  # Price formatting utility
├── styles/             # Global styles
│   └── index.css       # Main stylesheet
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point

public/
├── images/             # All image assets (copied from original)
│   ├── home/
│   ├── products/
│   ├── about/
│   ├── contact/
│   └── icons/
└── products.json       # Product data
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

The app will be available at `http://localhost:5173` (default Vite port)

## ✨ Features

- **React Components**: Modern, reusable component architecture
- **React Router**: Client-side routing for smooth navigation
- **Custom Hooks**: `useCart` hook for cart management with localStorage
- **Responsive Design**: Mobile-friendly layout using CSS media queries
- **Product Catalog**: Dynamic product loading from JSON
- **Shopping Cart**: Full cart functionality with add/remove/quantity adjustment
- **Checkout System**: Order form with validation
- **Local Storage**: Cart persistence across sessions
- **Smooth Animations**: CSS animations for better UX

## 📱 Pages

- **Home** (`/`): Landing page with featured products and hero section
- **Products** (`/products`): Full product catalog with shopping cart
- **About** (`/about`): Company information
- **Contact** (`/contact`): Contact details and social media links

## 🛒 Cart Functionality

- Add products to cart with visual feedback popup
- Adjust quantities with +/- buttons
- Real-time total calculation
- Cart persists across page refreshes using localStorage
- Checkout with delivery address form
- Order success confirmation

## 🎨 Styling

- CSS-based responsive design (no CSS frameworks)
- Mobile breakpoints at 768px and 600px
- Animation support with custom keyframes
- Consistent color scheme and typography

## 🔄 Migration Notes

This React version maintains feature parity with the original vanilla JavaScript version:

- ✅ All pages and functionality preserved
- ✅ Same visual design and animations
- ✅ Enhanced with React best practices
- ✅ Improved code organization
- ✅ Better state management with hooks
- ✅ Modern build tooling with Vite

## 📦 Dependencies

- **React 19**: UI library
- **React Router DOM**: Client-side routing
- **Vite**: Build tool and dev server

## 🔧 Development

### Add New Pages

Create a new component in `src/pages/` and add route to `src/App.jsx`:

```jsx
<Route path="/new-page" element={<NewPage />} />
```

### Add New Components

Create component in `src/components/` and import where needed.

### Manage Cart State

Use the `useCart` hook in your components:

```jsx
const { carts, addToCart, changeQuantity, getTotalQuantity } = useCart();
```

## 📝 Product Data

Products are loaded from `public/products.json`. Update this file to modify product list.

## 🚢 Deployment

### GitHub Pages

Update `vite.config.js` with your repository name:

```js
export default defineConfig({
  base: "/Kedai-Takjil-React/",
  plugins: [react()],
});
```

Then deploy using GitHub Actions or manual build.

## 📄 License

This project is a modernized version of Kedai Takjil. Original project by the Kedai Takjil team.
