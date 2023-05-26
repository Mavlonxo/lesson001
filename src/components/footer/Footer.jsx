import React from "react";
import './Footer.css'

function Footer() {
  const links = [    { title: "Shop", urls: ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "AirPods"] },
    { title: "Services", urls: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud", "Apple One", "Apple Card", "Apple Fitness+"] },
    { title: "Account", urls: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"] },
    { title: "Apple Store", urls: ["Find a Store", "Shop Online", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App"] },
    { title: "For Business", urls: ["Apple and Business", "Shop for Business", "Government"] },
    { title: "For Education", urls: ["Apple and Education", "Shop for K-12", "Shop for College"] },
    { title: "For Healthcare", urls: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"] },
    { title: "For Government", urls: ["Shop for Government", "Shop for Veterans and Military"] }
  ];

  return (
    <footer>
      <nav>
        {links.map((link) => (
          <div key={link.title}>
            <h3>{link.title}</h3>
            <ul>
              {link.urls.map((url) => (
                <li key={url}>
                  <p>{url}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div>
        <p>© 2023 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

