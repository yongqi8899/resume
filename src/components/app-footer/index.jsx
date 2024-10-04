import { memo } from "react";
const Footer = memo(() => {
  return (
    <footer className="fixed bottom-0 p-4 footer footer-center text-base-content bg-neutral">
      <aside>
        <p>Copyright © Yongqi Zhang</p>
      </aside>
    </footer>
  );
});
export default Footer;
