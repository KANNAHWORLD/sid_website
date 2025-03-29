import React, { useState, useEffect } from 'react';
import './Webpages.css';
import { FaArrowUp, FaMugHot, FaShoppingBag, FaBookOpen, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for the Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Coffee = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        // Function to check scroll position and show/hide button
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Coffee equipment data
    const equipment = [
        {
            title: "Breville Barista Express",
            description: "My go-to machine for crafting espresso at home. This semi-automatic espresso machine has an integrated conical burr grinder and allows for precise control over grind size, dose, and extraction.",
            image: "/images/breville.jpg",
            type: "Espresso Machine"
        },
        {
            title: "Hario V60",
            description: "My favorite pour-over dripper for bringing out the bright, clean flavors in single-origin coffees. The spiral ridges and large single hole design create the perfect flow rate for extraction.",
            image: "/images/v60.jpg",
            type: "Pour-Over"
        },
        {
            title: "Baratza Encore Grinder",
            description: "A reliable conical burr grinder that provides consistent grounds for pour-over methods. 40 grind settings offer versatility for different brewing techniques.",
            image: "/images/grinder.jpg",
            type: "Grinder"
        },
        {
            title: "Fellow Stagg EKG Electric Kettle",
            description: "Temperature-controlled gooseneck kettle that allows for precise pouring and maintains water at the exact temperature needed for optimal extraction.",
            image: "/images/kettle.jpg",
            type: "Kettle"
        }
    ];

    // Favorite coffee beans
    const favoriteBeans = [
        {
            name: "Ethiopia Yirgacheffe",
            roaster: "Verve Coffee Roasters",
            notes: "Floral, citrus, bergamot",
            description: "A light roast with delicate floral notes and bright citrus acidity that shines in pour-over brewing.",
            link: "https://www.vervecoffee.com/"
        },
        {
            name: "Colombia El Paraiso",
            roaster: "Counter Culture Coffee",
            notes: "Red fruit, chocolate, caramel",
            description: "Medium roast with a wonderful balance of sweetness and acidity that works beautifully as espresso.",
            link: "https://counterculturecoffee.com/"
        },
        {
            name: "Guatemala Antigua",
            roaster: "Blue Bottle Coffee",
            notes: "Milk chocolate, almond, apple",
            description: "A versatile medium roast that's excellent in both espresso and pour-over preparations.",
            link: "https://bluebottlecoffee.com/"
        }
    ];

    // Local coffee shops
    const localCoffeeShops = [
        {
            name: "Verve Coffee Roasters",
            location: "Los Angeles, CA",
            description: "Amazing third-wave coffee shop with bright, fruity espressos and carefully crafted pour-overs.",
            rating: 5,
            coordinates: [34.0195, -118.4912]  // [latitude, longitude]
        },
        {
            name: "Intelligentsia",
            location: "Los Angeles, CA",
            description: "Pioneer of direct trade practices with exceptional single-origin offerings and skilled baristas.",
            rating: 4.5,
            coordinates: [34.0921, -118.2832]
        },
        {
            name: "Blue Bottle Coffee",
            location: "Los Angeles, CA",
            description: "Minimalist aesthetic with meticulous attention to brewing technique and bean freshness.",
            rating: 4.5,
            coordinates: [34.0407, -118.2468]
        }
    ];

    // LA center coordinates for map
    const mapCenter = [34.0522, -118.2437];

    return (
        <div className="Background coffee-background">
            {/* Hero Section */}
            <section className="coffee-hero">
                <div className="coffee-hero-content">
                    <h1>My Coffee Journey</h1>
                    <p>From bean to cup: exploring the art and science of coffee brewing</p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="page-section coffee-intro-section">
                <div className="section-content">
                    <h2>My Coffee Story</h2>
                    <p>
                        My passion for coffee began during college when I first experienced a properly 
                        prepared pour-over that revealed flavors I never knew existed in coffee. What started 
                        as a curiosity quickly evolved into a full-blown hobby as I invested in better equipment 
                        and began exploring specialty coffee.
                    </p>
                    <p>
                        Today, brewing coffee is both a science experiment and a morning ritual. I enjoy 
                        the precision of dialing in an espresso shot as much as discovering new single-origin 
                        beans with unique flavor profiles. This page documents my coffee journey, equipment, 
                        favorite beans, and brewing recipes.
                    </p>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="page-section coffee-equipment-section">
                <div className="section-content">
                    <h2>My Brewing Equipment</h2>
                    <div className="coffee-equipment-grid">
                        {equipment.map((item, index) => (
                            <div key={index} className="coffee-equipment-card">
                                <div className="equipment-image-container">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="equipment-image"
                                        onError={(e) => {
                                            e.target.src = "/images/coffee-placeholder.jpg";
                                        }}
                                    />
                                </div>
                                <div className="equipment-details">
                                    <h3>{item.title}</h3>
                                    <span className="equipment-type">{item.type}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Favorite Beans Section */}
            <section className="page-section coffee-beans-section">
                <div className="section-content">
                    <h2>Favorite Coffee Beans</h2>
                    <div className="coffee-beans-grid">
                        {favoriteBeans.map((bean, index) => (
                            <div key={index} className="coffee-bean-card">
                                <div className="bean-icon"><FaShoppingBag /></div>
                                <h3>{bean.name}</h3>
                                <h4>by {bean.roaster}</h4>
                                <div className="bean-notes">
                                    <span>Tasting Notes:</span> {bean.notes}
                                </div>
                                <p>{bean.description}</p>
                                <a 
                                    href={bean.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bean-link"
                                >
                                    Visit Roaster
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Coffee Shops Section */}
            <section className="page-section coffee-shops-section">
                <div className="section-content">
                    <h2>Favorite Local Coffee Shops</h2>
                    <div className="coffee-shops-container">
                        <div className="coffee-shops-grid">
                            {localCoffeeShops.map((shop, index) => (
                                <div key={index} className="coffee-shop-card">
                                    <h3>{shop.name}</h3>
                                    <h4>{shop.location}</h4>
                                    <div className="shop-rating">
                                        {[...Array(Math.floor(shop.rating))].map((_, i) => (
                                            <FaStar key={i} className="star-filled" />
                                        ))}
                                        {shop.rating % 1 !== 0 && (
                                            <FaStar className="star-half" />
                                        )}
                                    </div>
                                    <p>{shop.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="coffee-shops-map">
                            <MapContainer 
                                center={mapCenter} 
                                zoom={10} 
                                style={{ 
                                    height: "475px", 
                                    width: "100%", 
                                    borderRadius: "8px", 
                                    marginTop: "20px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                                    filter: "contrast(0.9) saturate(0.9)"
                                }}
                            >
                                {/* Base map - Esri World Street Map */}
                                <TileLayer
                                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                                    attribution='&copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
                                />
                                
                                {localCoffeeShops.map((shop, index) => (
                                    <Marker key={index} position={shop.coordinates}>
                                        <Popup>
                                            <div>
                                                <h4>{shop.name}</h4>
                                                <p>{shop.location}</p>
                                                <p>{shop.rating}/5 ★</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <div 
                className={`scroll-to-top ${showScrollButton ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
            >
                <FaArrowUp className="scroll-to-top-icon" />
            </div>
        </div>
    );
};

export default Coffee; 