<template>
  <section class="how">
    <h2>How does it work</h2>
    <div class="steps">
      <article>
        <div class="step-icon">⌖</div>
        <h3>Select location</h3>
        <p>Choose the location where your<br />food will be delivered.</p>
      </article>
      <article>
        <div class="step-icon">▰</div>
        <h3>Choose order</h3>
        <p>Check over hundreds of menus to<br />pick your favorite food.</p>
      </article>
      <article>
        <div class="step-icon">$</div>
        <h3>Pay advanced</h3>
        <p>It's quick, safe, and simple. Select<br />several methods of payment.</p>
      </article>
      <article>
        <div class="step-icon">🍩</div>
        <h3>Enjoy meals</h3>
        <p>Food is delivered hot to your door.<br />Ready to eat!</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.how { background: linear-gradient(#fffaf3, #fff); margin-top: 55px; padding: 35px 5% 55px; }
.how h2 { text-align: center; color: #f97316; }
.steps { max-width: 1000px; margin: 30px auto 0; display: grid; grid-template-columns: repeat(4, 1fr); text-align: center; }
.step-icon { height: 85px; color: #f9a51b; font-size: 58px; line-height: 85px; text-shadow: 0 5px 10px #f3dfaf; }
.steps h3 { font-size: 13px; margin: 10px 0 8px; }
.steps p { color: #9aa1a8; font-size: 11px; line-height: 1.5; }

@media (max-width: 600px) {
  .steps { grid-template-columns: 1fr 1fr; gap: 25px; }
}
</style>
