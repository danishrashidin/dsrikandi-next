"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useBreakpoints } from "@/hooks/breakpoints"

interface NavigationItem {
    title: string
    description?: string
    path: string
    children?: NavigationItem[]
}

const links: NavigationItem[] = [{
    title: "Mens",
    path: "#",
    children: [
        {
            "title": "Formal Elegance",
            "description": "Suits, dress shirts, and ties for sophisticated and formal occasions.",
            path: "#"
        },
        {
            "title": "Street Style",
            "description": "Trendy and urban-inspired clothing for casual everyday wear.",
            path: "#"
        },
        {
            "title": "Outdoor Adventure Gear",
            "description": "Functional and durable clothing suitable for hiking, camping, and outdoor activities.",
            path: "#"
        },
        {
            "title": "Workout Warriors",
            "description": "Performance-focused activewear and gear for gym enthusiasts.",
            path: "#"
        },
        {
            "title": "Timeless Classics",
            "description": "Wardrobe staples like denim jeans, basic tees, and versatile jackets.",
            path: "#"
        },
        {
            "title": "Grooming Essentials",
            "description": "Premium skincare, shaving kits, and grooming tools for the modern man.",
            path: "#"
        }
    ]
}, {
    title: "Womens",
    path: "#",
    children: [
        {
            "title": "Bohemian Bliss",
            "description": "Flowy dresses, earthy tones, and free-spirited fashion for a boho-chic vibe.",
            path: "#"
        },
        {
            "title": "Professional Power Dressing",
            "description": "Sleek suits, tailored blazers, and sophisticated workwear essentials.",
            path: "#"
        },
        {
            "title": "Casual Comfort",
            "description": "Cozy loungewear, relaxed-fit clothing, and comfortable everyday wear.",
            path: "#"
        },
        {
            "title": "Festival Fashion",
            "description": "Vibrant, eclectic pieces perfect for music festivals and outdoor events.",
            path: "#"
        },
        {
            "title": "Maternity Must-Haves",
            "description": "Stylish and comfortable clothing designed for expectant mothers.",
            path: "#"
        },
        {
            "title": "Luxury Lounge",
            "description": "High-end loungewear and luxurious home attire for leisurely days.",
            path: "#"
        }
    ]
}, {
    title: "Kids",
    path: "#",
    children: [
        {
            "title": "Princess & Prince Wardrobe",
            "description": "Adorable outfits for your little royals, featuring charming dresses and smart suits.",
            path: "#"
        },
        {
            "title": "Little Athletes' Playground",
            "description": "Activewear and sports gear designed for active and playful kids.",
            path: "#"
        },
        {
            "title": "School Style Staples",
            "description": "Uniforms, backpacks, and essentials for school-going children.",
            path: "#"
        },
        {
            "title": "Tiny Trendsetters",
            "description": "Fashion-forward clothing and accessories to keep your kids stylish.",
            path: "#"
        },
        {
            "title": "Seasonal Sensations",
            "description": "Season-specific clothing for summer, winter, fall, and spring.",
            path: "#"
        },
        {
            "title": "Bedtime Buddies",
            "description": "Cozy pajamas, cute sleepwear, and bedtime accessories for sweet dreams.",
            path: "#"
        }
    ]

}]

export default function Navbar() {
    const breakpoint = useBreakpoints()()
    return (
        <div className="h-[72px] w-full bg-white border-b border-neutral-200">
            <div className="container h-full flex flex-row justify-between items-center gap-6">
                {/* LOGO */}
                <h1 className="text-left text-2xl font-bold text-neutral-900">Isya Mode</h1>
                <div className="flex flex-row grow items-center md:justify-between">
                    {/* NAVIGATIONS */}
                    {breakpoint !== 'sm' && <NavigationMenu>
                        <NavigationMenuList>
                            {...links.map(link => (
                                <NavigationMenuItem key={link.title}>
                                    <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="w-[512px] p-4">
                                            <div className="grid grid-cols-2 gap-2">
                                                {link.children?.map((child, index) => (
                                                    <Link key={index} href={child.path} legacyBehavior passHref>
                                                        <NavigationMenuLink className={`flex flex-col gap-2 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}>
                                                            <div className="text-sm font-medium leading-none">{child.title}</div>
                                                            <p className="text-sm leading-snug text-muted-foreground">
                                                                {child.description}
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>}
                    <div className="flex flex-row items-center gap-2">
                        {/* CART */}
                        <Button variant="link">
                            <ShoppingCartIcon className="h-6" />
                        </Button>
                        {/* PROFILE */}
                        <Button variant="link">
                            <UserCircleIcon className="h-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};