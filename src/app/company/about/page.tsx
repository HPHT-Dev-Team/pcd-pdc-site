'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '@/utils/image-loader';
import { div } from 'framer-motion/client';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leading manufacturer of Polycrystalline Diamond tools and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  With over four decades of experience in diamond processing and tool manufacturing,
                  we have established ourselves as a leading provider of high-quality industrial
                  diamond solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our commitment to innovation and quality has made us a trusted partner for
                  industries ranging from oil & gas to construction and manufacturing.
                </p>
                
						
              </motion.div>
            </div>

            <div className="relative h-[400px]">
              <Image
                src={`${basePath}/images/hpht_products/manufacturing_process.jpg`}
                alt="Manufacturing facility"
                fill
                className="object-cover rounded-lg"
                loader={imageLoader}
              />
            </div>
          </div>

          <div className="col-md-12 text-lg text-gray-600 mb-6 mt-5">
                <p >Shri Navin B Parsana entered the Diamond Business individually in Bombay from 1975. He started a Diamonds manufacturing unit in Bombay and also traded in Diamonds. In 1980 he joined hands with Shri Ashwin B. Choksi who also had experience in the line of manufacturing and exporting of diamonds, both joined together and started in partnership firm "PINK STAR" for setting up a traditional method of unit for cutting and polishing of diamonds. 

								Subsequently Mr. Navin B. Parsana went to Belgium and obtained a diploma as a "DIAMOND CUTTER" in Antwerp in the field of semi automatic method of Diamond Cutting and Polishing. 
								
								In onder to achieve the objective of starting a semi automatic method of cutting and polishing unit, another partnership firm was established in the name and style of "THE DIAMOND CORPORATION" during 1984. The said firm then installed semi automatic polishing mills for manufacturing of diamonds at Virwani Industrial Estate, Goregion (E), Mumbai-400063. The entire production of polished diamonds was manufactured with the then new technology of semi automatic cutting and polishing concept by using sophisticated high tech tools like double head bruiting machines, sawing machines, Laser machine, semi automatic dops and tungs, press pots ete and exported ta various countries. 
								
								Another firm by the name "The Laser Diamond Corporation" was formed and the first Laser machine to cut (Cleave) rough diamonts was imported from USA to India in 1985 Also the group of companies became agents of various semi automatic diamond cutting & polishing machinery suppliers from Belgium. Another private limited firm by the name Heaven Diamonds Pvt. Ltd., was started during 1985. Additional Semi Automatic Polishing Benches were installed to cater to the demand for the export market. Along with the new semi automatic polishing benches and other type of new machinery, one sophisticated CNC Lathe from MAZAK Company Japan was also imported to increase the accuracy and production. 
								
								Indian manufacturing were facing stiff competition with the traditional method in the early 80' to match the International standard of cutting and polishing (Quality & Quantity) In 3 years the company the Indian Diamond Cutting & Polishing Industry from the traditional method to the Semi Automaric method for which the Indian Govemment gave "The Rajiv Gandhi Award" Lo Navin B Parsana. An award which is given by the Indian Goverment for special achievement. The company developed experlise over the years in the line of cutting & polishing of Rough Diamonds which are comparable with the Cut & Polished Diamond of Belgium & Israel in the International market. 
								
								Australian Rough Diamonds from the Argyle Mines of Australia started coming to India and Belgium for trading & manufacturing. These Australian rough diamonds were very hard to polish, so in 1989 the company started producing the Diamond Impregnated Scaife. And PCD to brut diamand. Heaven Diamonds Pvt.Ltd. was the first company in India to invent The Diamond Impregnated COBALT FREE scaife. With the belp of this invention the Australian hard Rough Diamonad could be cut & polished 20 times faster. 
								
								With the help of the Semi Automatic method rough sawn diamonds could be cut & polished faster with precision and maximum yield. The Bruting (Shaping) of the sawn rough diamonds was done with the help of low quality Boart Diamonds. The company then started manufacturing the PCD in 1989 and started using them to recondition scaife, OPEN SCAIFE FOR POLISHING and brut (shape) rough sawn diamonds. 
								
								Subsequently our company became one of the biggest manufacturers of Diamond scaife in Indin and then slowly other Indian companies also started manufacturing then. Now in order to maintain a consistent production of good quality Diamond Scaife some of the raw ranterials like Metal powder, suitable cobalt & tungsten powder, etc. needed to be imported regularly, but due to bigh import custom duties, custom harassments and inconsistent supply farm the foreign suppliers, we decided to start manufacturng them in India so from 1998 we started manufacturing Cobalt, Carbide and Carbide substrate for manufacturing PDC/PDC, Tungsten powder, and PCD in Daman & AVIS MACHINE PVT.LTD. AtSurat (Gujrat) India. </p>
            </div>

               <div className="mt-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">SERVICE</h2>

                <h3>Since 1985 the group of companies provided services as under:</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>Set up a cutting & polishing factory on a turnkey basis since 1985.</li>
                        <li>
                        Set up a factory to manufacture diamond impregnated scaife to polish diamonds and PCD/PDC since 1987.
                        </li>
                        <li>
                        Set up a factory to manufacture PCD since 1989. We understand the behavior of natural and synthetic
                        diamonds as we have been in the diamond trade since 1975.
                        </li>
                    </ul>
                </div>

                <div className=" mt-3">
                <span className="text-3xl font-bold text-gray-900 mb-2">CONSULTANCY</span>
                <h3 className="text-lg font-medium text-gray-800 mb-4">We provided consultancy as under :-</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>To select the press and matrix.</li>
                    <li>To select the diamond powder suitable for PCD/PDC applications.</li>
                    <li>To select the treatment for powder.</li>
                    <li>To select the carbide substrate.</li>
                    <li>To select the suitable cleaning/annealing process for carbide.</li>
                    <li>To select the anvil.</li>
                    <li>Provide cube manufacturing process.</li>
                    <li>To select the HPHT process.</li>
                    <li>To provide lapping process.</li>
                    <li>To provide the grinding process.</li>
                    <li>To provide the testing method.</li>
                    <li>
                    To select various types of manufacturing for diamond assortment, cutting & polishing, laser
                    machine, planning machine, etc., to set up a diamond cutting & polishing factory.
                    </li>
                </ul>
                </div>


          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Expertise</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Quality Manufacturing',
                    description: 'State-of-the-art facilities and rigorous quality control processes.',
                    image: `${basePath}/images/hpht_products/quality_control.jpg`,
                  },
                  {
                    title: 'Research & Development',
                    description: 'Continuous innovation in diamond tool technology and applications.',
                    image: `${basePath}/images/hpht_products/RnD.jpg`,
                  },
                  {
                    title: 'Technical Support',
                    description: 'Expert technical support and customized solutions for your needs.',
                    image: `${basePath}/images/hpht_products/technical_support.jpg`,
                  },
                ].map((item) => (
                  <div key={item.title} className="relative">
                    <div className="h-48 overflow-hidden rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                        loader={imageLoader}
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 