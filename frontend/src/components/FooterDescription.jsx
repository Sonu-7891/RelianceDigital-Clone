import { Box, Typography, Link } from "@mui/material";

const FooterDescription = () => (
  <Box sx={{ mx: "auto", px: 4, py: 6 }}>
    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
      Welcome to Reliance Digital - Your One-Stop Destination for Electronics
      Shopping!
    </Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>
      Discover the convenience of shopping for all your electronic needs from
      the comfort of your home with Reliance Digital Online. As India's premier
      online electronics store, we bring you an extensive range of the latest
      gadgets, appliances, and tech accessories at your fingertips.
    </Typography>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>
        <b>Mobiles:</b> Stay connected and ahead of the curve with the{" "}
        <Link href="#" color="primary">
          latest mobiles
        </Link>{" "}
        from top brands. At Reliance Digital, you'll find the coolest
        smartphones with exclusive offers and recommendations to help you stay
        connected in style.
      </li>
      <li>
        <b>Laptops:</b> Power up your productivity and gaming experience with
        cutting-edge{" "}
        <Link href="#" color="primary">
          laptops
        </Link>{" "}
        for work and play. Whether you're a student, freelancer, or avid gamer,
        Reliance Digital offers a wide range of laptops at competitive prices to
        suit your needs and budget.
      </li>
      <li>
        <b>Home Appliances:</b> Make your space more efficient and comfortable
        with our range of smart home appliances. From{" "}
        <Link href="#" color="primary">
          Refrigerators
        </Link>
        ,{" "}
        <Link href="#" color="primary">
          ACs
        </Link>
        , to{" "}
        <Link href="#" color="primary">
          Washing machines
        </Link>
        , Reliance Digital has everything you need to make your space more
        efficient and comfortable.
      </li>
      <li>
        <b>Audio:</b> Enjoy music at home or on-the-go with our{" "}
        <Link href="#" color="primary">
          Bluetooth speakers, Headphones
        </Link>
        . Create your own music with musical keyboards, Guitars and more.
        Discover your music with audio products at Reliance Digital across top
        Brands and offers that suit your taste and budget.
      </li>
      <li>
        <b>Kitchen Appliances:</b> Impress your friends with your culinary
        skills with our range of kitchen gadgets and appliances. At Reliance
        Digital, you'll find the latest kitchen essentials{" "}
        <Link href="#" color="primary">
          Microwave Oven, Mixer Grinders
        </Link>
        , to help you cook like a pro and keep your kitchen looking sleek and
        modern.
      </li>
      <li>
        <b>Personal Care Products:</b> Look and feel your best with our range of{" "}
        <Link href="#" color="primary">
          personal care products
        </Link>
        . From grooming essentials to skincare devices, Reliance Digital offers
        a curated selection of products to help you maintain your personal style
        and well-being.
      </li>
      <li>
        <b>Televisions:</b> Elevate your binge-watching experience with our
        range of high-definition televisions. Whether you're streaming your
        favourite OTT shows or gaming with friends, Reliance Digital has the{" "}
        <Link href="#" color="primary">
          latest TV
        </Link>{" "}
        models with stunning visuals and immersive sound to enhance your
        entertainment experience.
      </li>
      <li>
        <b>Cameras:</b> Capture and share your adventures with high-quality
        cameras and accessories. From epic travel photos to Instagram-worthy
        selfies, Reliance Digital offers a wide range of{" "}
        <Link href="#" color="primary">
          DSLR cameras
        </Link>
        , Action cameras and accessories to help you capture and share your
        favourite moments with ease.
      </li>
      <li>
        <b>Accessories:</b> Level up your tech game with the perfect accessories
        for your devices. At Reliance Digital, you'll find a wide selection of
        accessories to personalize and enhance your devices, from Keyboards,
        Compute mouse to Wifi routers, extenders and more.
      </li>
    </ul>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Reliance Digital offers a seamless online electronic shopping experience,
      allowing you to buy electronics online with ease. Take advantage of our:
    </Typography>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>
        <b>Multiple Finance Options:</b> Reliance Digital offers multiple
        finance options (EMI, No Cost EMI) with offers, giving you the
        flexibility to choose a payment plan that suits your budget and needs.
        Whether you prefer to pay upfront, in instalments, or through easy EMI
        options, we've got you covered.
      </li>
      <li>
        <b>Reliance ResQ Service Guarantee:</b> We know that peace of mind is
        priceless, especially when it comes to your electronic purchases. That's
        why every purchase you make at Reliance Digital is backed by our{" "}
        <Link href="#" color="primary">
          RelianceResQ
        </Link>{" "}
        service guarantee. Rest easy knowing that we've got you covered with
        reliable after-sales service and support, ensuring your satisfaction
        with every purchase.
      </li>
      <li>
        <b>Unmatched Network:</b> Living in a fast-paced world means you need
        access to your favourite electronics whenever and wherever you are. With
        over 2000 stores spanning 700 cities, Reliance Digital ensures that
        we're always close by to serve you better. Whether you prefer to shop
        online or visit us in-store, our extensive network ensures that you'll
        never have to go far to get your hands on the latest gadgets and
        accessories.
      </li>
    </ul>
    <Typography variant="body1">
      Join the millions of satisfied customers who trust Reliance Digital for
      their electronic shopping needs. Download our app or browse our online
      store to experience the best in technology and customer service.
    </Typography>
  </Box>
);

export default FooterDescription;
