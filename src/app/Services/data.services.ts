import {Injectable} from "@angular/core"
import {Http, Headers, RequestOptions} from "@angular/http"
import {LoaderService} from "../Loader/loader.service";


@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private options: RequestOptions = new RequestOptions({headers: this.headers});

  constructor(private http: Http,
              private loader: LoaderService)
  {
    this.updateHeader();
  }



  getData(url: string) {
    return this.http
      .get(url, this.options)
      .map(res => res.json())

  }

  create(url: string, obj: any) {
    return this.http
      .post(url, JSON.stringify(obj), this.options)
      .map(response => response.json())
  }

  deleteById(url: string, id: string) {
    return this.http
      .delete(url + '/' + id, this.options)
      .map(response => response.json());
  }

  validateAdd(arr: Array<any>, name: string): boolean {

    for (let obj of arr) {
      if (obj.Name.toLowerCase() == name.toLowerCase()) {
        return false;
      }
    }
    return true;
  }

  private updateHeader() {
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('currentUser'));
  }

  private handleError() {
    //TODO: HangleError service
  }
}

