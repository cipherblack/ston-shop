import { useMemo, useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const products = [
	{
		id: 'travertin-takab',
		name: 'تراورتن تکاب',
		description: 'تراورتن با کیفیت عالی از معادن تکاب',
		category: 'travertine',
		price: 450,
		image: '/image/blog-4.jpg',
	},
	{
		id: 'travertin-abarkuh',
		name: 'تراورتن ابرکوه',
		description: 'تراورتن مرغوب از معادن ابرکوه یزد',
		category: 'travertine',
		price: 480,
		image: '/image/blog-3.jpg',
	},
	{
		id: 'travertin-kamshcheh',
		name: 'تراورتن کمشچه',
		description: 'تراورتن با دوام از معادن کمشچه',
		category: 'travertine',
		price: 420,
		image: '/image/blog-3.jpg',
	},
	{
		id: 'travertin-dehshir',
		name: 'تراورتن دهشیر',
		description: 'تراورتن با کیفیت از معادن دهشیر',
		category: 'travertine',
		price: 460,
		image: '/image/blog-5.jpg',
	},
	{
		id: 'marble-lashtar',
		name: 'مرمریت لاشتر',
		description: 'مرمریت درجه یک از معادن لاشتر',
		category: 'marble',
		price: 520,
		image: '/image/blog-6.jpg',
	},
];

const Products = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [showFilters, setShowFilters] = useState(false);
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const matchesCategory =
				selectedCategory === 'all' || product.category === selectedCategory;
			const matchesSearch =
				product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesPrice =
				product.price >= priceRange[0] && product.price <= priceRange[1];
			return matchesCategory && matchesSearch && matchesPrice;
		});
	}, [selectedCategory, searchQuery, priceRange]);

	return (
		<div className="rtl min-h-screen bg-marble">
			<div className="relative py-24">
				<div className="absolute inset-0 overflow-hidden">
					<img
						src=""
						alt="Header background"
						className="w-full h-full object-cover opacity-10"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-accent-gold/10 to-transparent" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center"
					>
						<h1 className="text-5xl font-bold mb-6 text-stone drop-shadow">
							محصولات سنگ ایران
						</h1>
						<p className="text-xl text-accent-blue max-w-2xl mx-auto">
							مجموعه‌ای از بهترین سنگ‌های ساختمانی با کیفیت برتر
						</p>
					</motion.div>

					<div className="mt-12 flex flex-col md:flex-row gap-4">
						<div className="relative flex-grow">
							<Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-accent-gold" />
							<input
								type="text"
								placeholder="جستجو در محصولات..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pr-12 py-3 rounded-xl border border-accent-gold/20 focus:ring-2 focus:ring-accent-gold focus:border-transparent shadow-sm bg-marble text-stone placeholder:text-stone/40"
							/>
						</div>

						<button
							onClick={() => setShowFilters(!showFilters)}
							className="md:w-auto w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-gold text-stone rounded-xl hover:bg-accent-gold/80 transition shadow font-bold border border-accent-gold/20"
						>
							<Filter className="w-5 h-5 text-stone" />
							<span>فیلترها</span>
							<ChevronDown
								className={`w-4 h-4 transition-transform text-stone ${
									showFilters ? 'rotate-180' : ''
								}`}
							/>
						</button>
					</div>

					<AnimatePresence>
						{showFilters && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								className="mt-4 bg-marble rounded-xl shadow p-6 border border-accent-gold/10"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h3 className="text-lg font-semibold mb-4 text-stone">
											دسته‌بندی
										</h3>
										<div className="flex flex-wrap gap-2">
											{categories.map((category) => (
												<button
													key={category.id}
													onClick={() => setSelectedCategory(category.id)}
													className={`px-4 py-2 rounded-lg transition font-bold border border-accent-gold/10 ${
														selectedCategory === category.id
															? 'bg-accent-gold text-stone shadow'
															: 'bg-marble text-stone hover:bg-accent-gold/10'
													}`}
												>
													{category.name}
												</button>
											))}
										</div>
									</div>

									<div>
										<h3 className="text-lg font-semibold mb-4 text-stone">
											محدوده قیمت (هزار تومان)
										</h3>
										<div className="flex gap-4 items-center">
											<input
												type="range"
												min="0"
												max="1000"
												value={priceRange[0]}
												onChange={(e) =>
													setPriceRange([
														parseInt(e.target.value),
														priceRange[1],
													])
												}
												className="w-full accent-accent-gold"
											/>
											<input
												type="range"
												min="0"
												max="1000"
												value={priceRange[1]}
												onChange={(e) =>
													setPriceRange([
														priceRange[0],
														parseInt(e.target.value),
													])
												}
												className="w-full accent-accent-gold"
											/>
											<span className="text-stone font-bold">
												{priceRange[0]} - {priceRange[1]}
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-12">
				<div
					ref={ref}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{filteredProducts.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: index * 0.1 }}
							className="group"
						>
							<div className="bg-marble rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 border-2 border-accent-gold/10">
								<div className="relative aspect-square overflow-hidden">
									<img
										src={product.image}
										alt={product.name}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-accent-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>

								<div className="p-6">
									<div className="flex items-start justify-between mb-2">
										<h3 className="text-xl font-semibold text-stone">
											{product.name}
										</h3>
										<span className="text-accent-gold font-bold">
											{product.price} هزار تومان
										</span>
									</div>
									<p className="text-accent-blue mb-4">
										{product.description}
									</p>
									<div className="flex items-center justify-between">
										<span className="px-3 py-1 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-full text-sm font-bold">
											{categories.find((c) => c.id === product.category)?.name}
										</span>
										<Link
											to={`/products/${product.id}`}
											className="bg-accent-gold text-stone px-6 py-2 rounded-lg hover:bg-accent-gold/80 transition transform hover:scale-105 font-bold shadow-sm border border-accent-gold/20"
										>
											جزئیات و خرید
										</Link>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

const categories = [
	{ id: 'all', name: 'همه' },
	{ id: 'granite', name: 'گرانیت' },
	{ id: 'marble', name: 'مرمر' },
	{ id: 'travertine', name: 'تراورتن' },
];

export default Products;