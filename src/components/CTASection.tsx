import React from 'react';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-20 bg-khahusNavy text-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-6">Let&apos;s Solve Your Next Business Challenge</h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Whether you need professional training, strategic advisory or practical organizational support, speak with KHAHUS Consulting Solutions about your requirements.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="mailto:info@khahusconsulting.com.ng" className="px-8 py-4 bg-khahusRed text-white font-bold rounded shadow-lg hover:bg-khahusRedDark transition">
                        Request a Consultation
                    </Link>
                    <Link href="tel:+2348035926194" className="px-8 py-4 border-2 border-khahusGold text-white font-bold rounded hover:bg-khahusGold/15 transition">
                        Speak With a Consultant
                    </Link>
                </div>
            </div>
        </section>
    );
}
