<template>
  <section class="feedback">
    <div class="container feedback-wrap">
      <div class="speaker">
        <img class="speaker-img" src="img/speaker.png" alt="speaker" />
        <p>
          <span class="text-speaker"
            >“Vestibulum quis porttitor dui! Quisque <br />viverra nunc
            mi,</span
          >
          <span class="text-speaker--italic"
            >a pulvinar purus <br />condimentum“</span
          >
        </p>
      </div>
      <div class="feedback-button">
        <p class="text-subscribe">
          SUBSCRIBE<br /><span class="text-subscribe--small"
            >FOR OUR NEWLETTER AND PROMOTION</span
          >
        </p>
        <form action="#" class="subscribe">
          <input
            class="subscribe-field"
            type="email"
            minlength="3"
            placeholder="Enter Your Email"
            required
          />
          <input class="subscribe-btn" type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style>
</style>