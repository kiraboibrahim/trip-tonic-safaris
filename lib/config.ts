const siteConfig = {
    company: {
        name: process.env.NEXT_PUBLIC_COMPANY_NAME,
        tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE,
        logo: process.env.NEXT_PUBLIC_COMPANY_LOGO,
        favicon: process.env.NEXT_PUBLIC_COMPANY_FAVICON
    },

    contact: {
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
        whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP,
        address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
        workingHours: process.env.NEXT_PUBLIC_CONTACT_HOURS
    },

    social: {
        facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
        instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
        twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
        linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
        youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE
    },

    business: {
        founded: process.env.NEXT_PUBLIC_BUSINESS_FOUNDED,
        license: process.env.NEXT_PUBLIC_BUSINESS_LICENSE,
        taxId: process.env.NEXT_PUBLIC_BUSINESS_TAX_ID,
        currency: process.env.NEXT_PUBLIC_BUSINESS_CURRENCY,
        currencySymbol: process.env.NEXT_PUBLIC_BUSINESS_CURRENCY_SYMBOL
    },

    seo: {
        title: process.env.NEXT_PUBLIC_SEO_TITLE,
        description: process.env.NEXT_PUBLIC_SEO_DESCRIPTION,
        keywords: process.env.NEXT_PUBLIC_SEO_KEYWORDS,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL
    },
};

export default siteConfig;
