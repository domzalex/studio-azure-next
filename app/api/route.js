import { NextResponse, NextRequest } from "next/server"

import { transporter, mailConfig } from "../config/nodemailer"

export async function POST(req, res) {
    const data = await req.json()
    if (!data.values.name || !data.values.email || !data.values.message) {
        return NextResponse.json({ message: "Bad request.", status: 400})
    }
    try {
        await transporter.sendMail({
            ...mailConfig,
            subject: "New inquiry",
            text: `${data.values.name} ${data.values.email} ${data.values.message}`,
            html: `<h1>${data.values.name}</h1><h2>${data.values.email}</h2><p>${data.values.message}</p>`
        })
        return NextResponse.json({ message: "Success!", success: true })
    } catch (error) {
        return NextResponse.json({ message: "Failed!", success: false })
    }

}