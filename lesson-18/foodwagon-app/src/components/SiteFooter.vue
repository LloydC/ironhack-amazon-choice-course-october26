<script setup>
defineProps({
  cities: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <footer>
    <div class="cities">
      <h3>Our top cities</h3>
      <div class="city-grid">
        <ul v-for="(city, index) in cities" :key="index">
          <li v-for="name in city" :key="name">{{ name }}</li>
        </ul>
      </div>
    </div>
    <div class="footer-main">
      <div class="footer-links">
        <div>
          <h3>Company</h3>
          <a>About us</a><a>Team</a><a>Careers</a><a>Blog</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a>Help &amp; Support</a><a>Partner with us</a><a>Ride with us</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a>Terms &amp; Conditions</a><a>Refund &amp; Cancellation</a><a>Privacy Policy</a
          ><a>Cookie Policy</a>
        </div>
      </div>
      <div class="subscribe">
        <h3>Follow Us</h3>
        <div class="socials"><span>◎</span><span>f</span><span>♥</span></div>
        <p>Receive exclusive offers in your mailbox</p>
        <div class="email-row">
          <label>✉ <input type="email" placeholder="Enter Your email" /></label>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>All rights Reserved © <b>Your Company, 2021</b></span>
      <span>Made with ♥ by <b>ThemeWagon</b></span>
    </div>
  </footer>
</template>

<style scoped>
footer { background: #0f172a; color: #b7bfcd; }
.cities { max-width: 1180px; margin: auto; padding: 45px 0 35px; }
.cities h3 { color: white; font-size: 13px; }
.city-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
.city-grid ul { list-style: none; padding: 0; }
.city-grid li { font-size: 11px; margin: 9px 0; }
.footer-main { max-width: 1180px; margin: auto; border-top: 1px solid #29344a; display: flex; justify-content: space-between; padding: 40px 0; }
.footer-links { display: flex; gap: 70px; }
.footer-links div { display: flex; flex-direction: column; }
.footer-links h3, .subscribe h3 { color: white; font-size: 13px; }
.footer-links a { color: #b7bfcd; font-size: 11px; margin: 6px 0; }
.subscribe p { font-size: 12px; }
.socials { display: flex; gap: 14px; color: #8c96a7; }
.email-row { display: flex; gap: 8px; }
.email-row label { width: 190px; background: #273247; color: #8c96a7; border-radius: 5px; padding: 12px; }
.email-row input { width: 145px; border: 0; outline: 0; background: transparent; color: white; }
.email-row button { background: #f9a51b; color: white; border-radius: 5px; padding: 12px 18px; }
.copyright { max-width: 1180px; margin: auto; border-top: 1px solid #29344a; height: 55px; display: flex; align-items: center; justify-content: space-between; font-size: 10px; }

@media (max-width: 900px) {
  .cities, .footer-main, .copyright { margin-left: 20px; margin-right: 20px; }
  .footer-main { gap: 30px; }
  .footer-links { gap: 30px; }
}

@media (max-width: 600px) {
  .city-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-main { flex-direction: column; }
  .footer-links { flex-wrap: wrap; }
  .copyright { flex-direction: column; justify-content: center; gap: 8px; }
}
</style>
