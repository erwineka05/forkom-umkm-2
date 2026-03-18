import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.OAUTH_CLIENT_ID;
  // Membuat state acak untuk keamanan
  const state = Math.random().toString(36).substring(7);
  
  // Mengarahkan admin ke halaman login resmi GitHub
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user&state=${state}`;
  
  return NextResponse.redirect(url);
}