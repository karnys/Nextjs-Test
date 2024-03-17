export async function GET(request, { params }) {
    console.log('test')
    return Response.json({
        name: 'karnys',
        id: params.id
    })
}