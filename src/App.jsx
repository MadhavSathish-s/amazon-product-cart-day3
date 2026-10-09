
import { useState, useEffect } from "react";

function Header() {
  return (
    <header
      style={{
        background: "#17202b",
        color: "#ff9900",
        padding: "18px 24px",
        fontSize: "22px",
        fontWeight: "bold"
      }}
    >
      Amazon Product Store
    </header>
  );
}

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const mouseColor =
    selectedColor === "Black"
      ? "#20252b"
      : selectedColor === "Blue"
      ? "#2477d4"
      : "#f5f5f5";

  const mouseBorder =
    selectedColor === "White" ? "2px solid #c9c9c9" : "none";

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "#eef2f5",
          width: "150px",
          minWidth: "150px",
          height: "200px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          aria-label={`${selectedColor} wireless mouse`}
          role="img"
          style={{
            width: "64px",
            height: "112px",
            borderRadius: "48% 48% 44% 44%",
            background: `linear-gradient(100deg, ${mouseColor}, ${
              selectedColor === "Black"
                ? "#50565e"
                : selectedColor === "Blue"
                ? "#69a8f0"
                : "#ffffff"
            }, ${mouseColor})`,
            border: mouseBorder,
            boxShadow: "5px 8px 12px #0002",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "3px",
              height: "20px",
              borderRadius: "4px",
              background: selectedColor === "White" ? "#999" : "#111"
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1px",
              height: "32px",
              background: selectedColor === "White" ? "#bbb" : "#ffffff55"
            }}
          />
        </div>
      </div>

      <div style={{ flex: "1", minWidth: "220px" }}>
        <h2 style={{ margin: "0 0 12px" }}>{productName}</h2>

        <p style={{ margin: "8px 0" }}>
          <strong style={{ fontSize: "22px" }}>₹{price}</strong> per item
        </p>

        <p>Colour: {selectedColor}</p>
        <p>Deliver to: {deliveryCity}</p>

        <hr style={{ border: "none", borderTop: "1px solid #ddd" }} />

        <p>Cart Quantity: {quantity}</p>

        <h3>Total Amount: ₹{quantity * price}</h3>

        <p style={{ color: "#555" }}>
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "18px",
        borderTop: "1px solid #ddd",
        color: "#555",
        background: "#f3f4f6"
      }}
    >
      © 2026 Amazon Product Store
    </footer>
  );
}

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const controlStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "7px",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box",
    background: "white"
  };

  const buttonStyle = {
    padding: "11px 17px",
    border: "1px solid #ddd",
    borderRadius: "25px",
    background: "white",
    cursor: "pointer",
    fontSize: "14px"
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f3f4f6",
        minHeight: "100vh",
        color: "#222"
      }}
    >
      <Header />

      <div
        style={{
          background: "#e9eef3",
          padding: "10px 18px",
          fontSize: "12px",
          color: "#555"
        }}
      >
        Tab title: Wireless Mouse | {selectedColor} | Cart: {quantity}
      </div>

      <main
        style={{
          maxWidth: "900px",
          margin: "24px auto",
          padding: "0 20px"
        }}
      >
        {showProduct && (
          <ProductCard
            productName="Wireless Mouse"
            price={499}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "24px"
          }}
        >
          <label>
            <div style={{ marginBottom: "8px" }}>Product colour</div>
            <select
              style={controlStyle}
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </label>

          <label>
            <div style={{ marginBottom: "8px" }}>Delivery city</div>
            <input
              style={controlStyle}
              type="text"
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
            />
          </label>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "24px"
          }}
        >
          <button
            style={{
              ...buttonStyle,
              background: "#ffd814",
              borderColor: "#ffd814"
            }}
            onClick={() => setQuantity((q) => q + 1)}
          >
            Add to Cart
          </button>

          <button
            style={{
              ...buttonStyle,
              cursor: quantity === 0 ? "not-allowed" : "pointer",
              opacity: quantity === 0 ? 0.5 : 1
            }}
            disabled={quantity === 0}
            onClick={() => setQuantity((q) => q - 1)}
          >
            Remove One
          </button>

          <button
            style={buttonStyle}
            onClick={() => setQuantity(0)}
          >
            Reset Cart
          </button>

          <button
            style={buttonStyle}
            onClick={() => setShowProduct((show) => !show)}
          >
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
