import { createClient } from '@supabase/supabase-js'

const URL = 'https://llrwvpjlqxlsbyzkhvei.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxscnd2cGpscXhsc2J5emtodmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjEzMjUsImV4cCI6MjAyODUzNzMyNX0.gPeJelCF1LQmTH8wP0nLarZSudSKLVepqqp3H5jfNao';

export const supabase = createClient(URL, API_KEY);