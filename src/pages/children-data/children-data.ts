import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiProvider, Child} from '../../providers/api/api';
// import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ChildrenDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-children-data',
  templateUrl: 'children-data.html',
})
export class ChildrenDataPage {
  STORAGE_KEY = "childrenData";
  questions_per_a_child: Array<{}> = [];

  ESTIMATED_WEIGHT_KEY = 'estimated_weight';
  PRESENTATION_KEY = 'presentation';
  IS_CERVICAL_ASTHENIA_KEY = 'is_cervical_asthenia';

  QUESTION_TYPE = {
    'select': 0,
    'number': 1,
  }

  children: Array<Child>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // private local_storage: Storage,
    private api: ApiProvider,
    private storage: Storage,
  ){
    this.children = ApiProvider.children || [];
    if(this.children != null){
      this.initialize(this.children);
    }
  }

  initialize(children){
    console.log(children)
    //todo: enum、あるいはフォーマットをdjangoから読む形 で実装したい
    for( let child of children) {
      console.log(child);
      this.addChildToQuestion(child);
    }
  }

  addChildToQuestion(child){
    let i = this.questions_per_a_child.length + 1;
    this.questions_per_a_child.push({
      child_name: child.name || 'お子様' + (i ++),
      child_url: child.url,
      questions: [
        {
          title: "推定体重[g]",
          type: this.QUESTION_TYPE.number,
          key: this.ESTIMATED_WEIGHT_KEY,
          value: child[this.ESTIMATED_WEIGHT_KEY],
        },
        {
          title: "胎位",
          type: this.QUESTION_TYPE.select,
          key: this.PRESENTATION_KEY,
          selectedValue: child[this.PRESENTATION_KEY] ,
          isMultiple: false,
          options: [
            {
              value: 0, //'unknown',
              displayName: '不明',
            },
            {
              value: 1,//'cephalic presentation',
              displayName: '頭位',
            },
            {
              value: 2, //'breech presentation',
              displayName: '骨盤位',
            },
            {
              value: 3, //'shoulder presentation',
              displayName: '横位',
            },
          ]
        },
      ]
    });

  }

  addChild(){
    this.api.createChild({}).subscribe(access => {
        if(access) {
          console.log("addChild()")
          this.children = ApiProvider.children;
          console.log(this.children)
        } else {
          this.children.push(new Child());
          console.log('add empty child')
        }
        this.addChildToQuestion(this.children[this.children.length - 1]);
      },
    );
  }

  onSelectChange(val: any, child_url){
    console.log("func onChange()")
    console.log(val)

    let child: Child = this.search_child(child_url);
    child[val['key']] = val['selectedValue'];

    this.update(child);
  }

  onNumberChange(event, key, child_id){
    console.log("called onNumberChange()")
    console.log(event)
    console.log(key)
    console.log(event.value)

    let child: Child = this.search_child(child_id);
    child[key] = Number(event.value);
    this.update(child);

    console.log('-------------------------')
  }

  update(child){
    this.api.updateChild(child).subscribe();
    let val = {};
    val[this.STORAGE_KEY] = this.children
    this.storage.set(this.STORAGE_KEY, JSON.stringify(val));
    console.log(val)
  }

  search_child(child_url){
    console.log("called search _child");
    console.log("child_id:" + child_url)
    for (let child of this.children) {
      if(child.url === child_url){
        return child
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrenDataPage');
  }
}
