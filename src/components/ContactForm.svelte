<section class="flex lg:justify-around md:justify-between justify-center flex-wrap gap-10 md:mt-6 p-6">
  <h2 class="md:text-6xl text-5xl max-w-max text-center">Get in touch</h2>
  <form id="contact" class="grid grid-cols-2 gap-4 flex-3 min-w-md max-w-lg">
    <label>
      Name*
      <input class="rounded-t-lg w-full border-b-1 p-1 transition delay-90 ease-in-out hover:backdrop-contrast-110 focus:outline-solid-2 focus:outline-fuchsia-200" type="text" name="fullname" placeholder="John Doe" required />
    </label>
    <label>
      Email*
      <input class="rounded-t-lg w-full border-b-1 p-1 transition delay-90 ease-in-out hover:backdrop-contrast-110 focus:outline-solid-2 focus:outline-fuchsia-200" type="email" name="email" placeholder="johndoe@gmail.com" required />
    </label>
    <label for="message">Message*</label>
    <textarea class="rounded-t-lg border-b-1 p-1 min-h-28 col-span-full transition delay-90 ease-in-out hover:backdrop-contrast-110 focus:outline-solid-2 focus:outline-fuchsia-200" id="message" name="message" placeholder="Your message goes here." required></textarea>
    <button class="shadow-xl bg-linear-65 from-fuchsia-950 from-10% to-fuchsia-400 hover:bg-linear-65 hover:from-fuchsia-400 hover:to-fuchsia-950 text-white active:border-3 border-purple-900 rounded-lg p-2 col-2 md-col-1 transition duration-700 ease-in-out" type="submit">Submit</button>
  </form>
</section>
