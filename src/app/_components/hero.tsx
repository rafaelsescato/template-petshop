import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import dogImage from "../../../public/image/hero-dog.webp"
import catImage from "../../../public/image/cat-hero.png"

export default function Hero() {
	return (
		<section className="bg-[#e84c3d] text-white relative overflow-hidden" >
			<div>
				<Image
					src={dogImage}
					alt="Foto do Cachorro"
					fill
					priority
					sizes="100vw"
					className="object-cover opacity-60 lg:hidden"
				/>
				<div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
			</div>

			<div className="container mx-auto px-4 pt-16 pb-16 md:pb-0 relative">



				<article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
							Seu pet merece cuidado, carinho e atenção especial.
						</h1>

						<p className="lg:text-lg">
							Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
						</p>

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

						<div className="mt-8">
							<p className="text-sm mb-4 flex gap-1 items-center">
								<b className="bg-black text-white px-2 rounded-md">
									5%
								</b>
								de desconto na primeira compra.
							</p>
							<div className="flex mt-4">
								<div className="w-32 hidden lg:block">
									<Image
										src={catImage}
										alt="Foto do Gato"
										quality={100}
										className="object-fill"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="hidden md:block h-full relative">
						<Image
							src={dogImage}
							alt="Foto do Cachorro"
							fill
							priority
							quality={100}
							sizes="(max-width: 768px) 0vw, 50vw"
							className="object-contain"
						/>
					</div>
				</article>
			</div>
		</section>
	)
}
