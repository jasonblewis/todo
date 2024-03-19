import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3'; 

const sqliteClient = new Database('localDB/sqlitedb');

export const database = drizzle(sqliteClient);

