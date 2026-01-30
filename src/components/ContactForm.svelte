<section class="flex lg:justify-around md:justify-between justify-center flex-wrap gap-10 mt-10">
  <h2 class="max-w-max text-center">Get in touch</h2>
  <form id="contact" class="grid grid-cols-2 gap-4 flex-3 min-w-md max-w-lg">
    <label>
      Name*
      <input class="rounded-lg w-full border p-1 transition delay-90 ease-in-out hover:backdrop-contrast-110" type="text" name="fullname" placeholder="John Doe" required />
    </label>
    <label>
      Email*
      <input class="rounded-lg w-full border p-1 transition delay-90 ease-in-out hover:backdrop-contrast-110" type="email" name="email" placeholder="johndoe@gmail.com" required />
    </label>
    <label for="message">Message*</label>
    <textarea class="rounded-lg border p-1 min-h-28 col-span-full transition delay-90 ease-in-out hover:backdrop-contrast-110" id="message" name="message" placeholder="Your message goes here." required></textarea>
    <button class="rounded-lg border p-1 col-2 md-col-1 transition delay-90 ease-in-out hover:backdrop-contrast-115" type="submit">Submit</button>
  </form>
</section>
