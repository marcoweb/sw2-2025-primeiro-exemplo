import { NextResponse } from "next/server";

import tasks from '@/dados.json';

export async function GET(request: Request, context: any) {
    const { params } = context;

    let resultado = null;

    tasks.forEach((item) => {
        if(item.id == params.tarefaId) {
            resultado = item;
        }
    });

    return NextResponse.json(resultado)
}