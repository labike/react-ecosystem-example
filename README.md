#### 修改
```
@connect(
  state => state,
  {...}
)
```
#### 为

```
const mapStateToProps (state) => {

}
const mapDispatchToProps (dispatch) => {
  
}
connect(mapStateToProps, mapDispatchToProps)(App)
```
