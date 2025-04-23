import Image from "next/image"
import aboutImg1 from "../../../public/image/about-1.png"
import aboutImg2 from "../../../public/image/about-2.png"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export default function About() {
	return (
		<section className="bg-[#fdf6ec] py-16">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
							<Image
								src={aboutImg1}
								alt="Foto do Gato e do Cachorro juntos"
								fill
								priority
								quality={100}
								className="object-cover hover:scale-110 duration-300"
							/>
						</div>

						<div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-[#fdf6ec]">
							<Image
								src={aboutImg2}
								alt="Foto do Gato"
								fill
								priority
								quality={100}
							/>
						</div>
					</div>

					<div className="space-y-6 mt-10">
						<h2 className="text-4xl font-bold">
							SOBRE
						</h2>
						<p className="text-justify">
							Amet cumque natus illo quisquam et Debitis exercitationem dolore omnis unde commodi. Corporis corporis placeat quo a iure quisquam Provident laudantium fugit earum accusantium ea. Quod provident rerum iure praesentium.
						</p>

						<ul className="space-y-4">
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Aberto desde 2006
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Equipe com mais de 10 veterinarios
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Qualidade é nossa prioridade
							</li>
						</ul>

						<div className="flex gap-2">

							<a
								data-aos="fade-up"
								data-aos-delay="500"
								target='_blank'
								href={`https://wa.me/999999999999?text=Olá vim pelo site e gostaria de mais informações sobre promoções.`}
								className="bg-green-500 px-5 py-2 rounded-md font-semibold  text-white flex items-center justify-center w-fit gap-2"
							>
								<WhatsappLogo className="w-5 h-5" />
								Contato via WhatsApp
							</a>

							<a
								href="#"
								className="flex items-center justify-center w-fit px-4 py-2 rounded-md"
							>
								<MapPin className="w-5 h-5 text-black" />
								Endereço da loja
							</a>

						</div>

					</div>

				</div>

			</div>
		</section>
	)
}
