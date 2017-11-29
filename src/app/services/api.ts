export class Api{
    public static BaseUrl:string='http://localhost:3000';
    public static GetAllBook:string=Api.BaseUrl+'/api/books';
    public static GetByIdBook:string=Api.BaseUrl+'/api/books';
    public static CreateBook:string=Api.BaseUrl+'/api/books';
    public static UpdateBook:string=Api.BaseUrl+'/api/books';
    public static DeleteBook:string=Api.BaseUrl+'/api/books';
    public static LoginUser:string=Api.BaseUrl+"/api/login";
    public static Register:string=Api.BaseUrl+"/api/register";
}