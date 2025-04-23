import golden from "../../../public/image/golden.png"
import royal from "../../../public/image/royal.png"
import primier from "../../../public/image/primier.png"
import whiskas from "../../../public/image/whiskas.png"
import natural from "../../../public/image/natural.png"
import Image from 'next/image'
import { WhatsappLogo, FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
	{ name: "Royal Canin", logo: royal },
	{ name: "Golden", logo: golden },
	{ name: "Primier", logo: primier },
	{ name: "Formula Natural", logo: natural },
	{ name: "Whiskas", logo: whiskas },
	{ name: "Golden", logo: golden },
]

export default function Footer() {
	return (
		<section className="bg-[#e84c3d] py-16 text-white">
			<div className="container mx-auto px-4">

				<div className="border-b border-white/20 pb-8">
					<h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>

					<div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
						{brands.map((item, index) => (
							<div key={index} className="bg-white p-4 rounded-lg lfex items-center justify-center">
								<Image
									src={item.logo}
									alt={item.name}
									width={100}
									height={50}
									quality={100}
									style={{
										width: "auto",
										height: "auto",
									}}
									className="object-contain"
								/>
							</div>
						))}
					</div>

				</div>

				<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12m mt-5">

					<div>
						<h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
						<p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação.</p>
						<a
							data-aos="fade-up"
							data-aos-delay="500"
							target='_blank'
							href={`https://wa.me/999999999999?text=Olá vim pelo site e gostaria de mais informações.`}
							className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
						>
							<WhatsappLogo className="w-5 h-5" />
							Contato via WhatsApp
						</a>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Contatos</h3>
						<p>Email: site@petshop.com</p>
						<p>Telefone: (xx) xxxx-xxxx</p>
						<p>Endereço: Rua X, centro, X | XX</p>
					</div>


					<div>
						<h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
						<div className="flex gap-4">
							<a
								data-aos="fade-up"
								data-aos-delay="500"
								target='_blank'
								href="https://facebook.com"
								className="hover:bg-blue-500 px-2 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
							>
								<FacebookLogo className="w-10 h-10" />
							</a>
							<a
								data-aos="fade-up"
								data-aos-delay="500"
								target='_blank'
								href="https://instagram.com"
								className="hover:bg-pink-700 px-2 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
							>
								<InstagramLogo className="w-10 h-10" />
							</a>
							<a
								data-aos="fade-up"
								data-aos-delay="500"
								target='_blank'
								href="https://youtube.com"
								className="hover:bg-red-800 px-2 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
							>
								<YoutubeLogo className="w-10 h-10" />
							</a>


						</div>
					</div>
				</footer>

			</div>
		</section>
	)
}
