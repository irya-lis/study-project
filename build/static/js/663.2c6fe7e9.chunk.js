"use strict";(self.webpackChunksamurai_react=self.webpackChunksamurai_react||[]).push([[663],{7663:function(s,t,e){e.r(t),e.d(t,{default:function(){return G}});var r=e(5671),i=e(3144),a=e(136),n=e(516),o=e(1413),u=e(2791),l="Profile_content__81m36",c="Ava_ava__TXa9n",p=e(8570),d=e(184),f=function(s){var t=s.profile;return t?(0,d.jsx)("div",{className:c,children:(0,d.jsx)("img",{src:null!==t.photos.large?t.photos.large:"./ava_user2.jpg",alt:"ava"})}):(0,d.jsx)(p.Z,{})},h="Description_description__GXGcu",j="Description_parameters__ZFf-w",v=e(9439),x="ProfileStatus_profileStatus__HfWha",m="ProfileStatus_inputStatus__2rBwu",_=function(s){var t=(0,u.useState)(!1),e=(0,v.Z)(t,2),r=e[0],i=e[1],a=(0,u.useState)(s.status),n=(0,v.Z)(a,2),o=n[0],l=n[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,d.jsxs)("div",{className:x,children:[!r&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"--------"})}),r&&(0,d.jsx)("div",{className:m,children:(0,d.jsx)("input",{onChange:function(s){l(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(o)},value:o})})]})},g=function(s){var t=s.status,e=s.updateStatus;return(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)(_,{status:t,updateStatus:e}),(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("div",{children:"Irina Rakova"}),(0,d.jsx)("div",{children:"26 year"}),(0,d.jsx)("div",{children:"Kazan"}),(0,d.jsx)("div",{children:"Married to Sergey Rakov"})]})]})},P=e(3433),S={myPosts:"MyPosts_myPosts__oJnNf"},k="Post_item__m6RVD",Z="Post_like__fPl-i",N=function(s){var t=(0,u.useState)(s.likesCount),e=(0,v.Z)(t,2),r=e[0],i=e[1];return(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("img",{src:"./ava.jpeg",alt:"ava"}),s.post,(0,d.jsxs)("div",{className:Z,children:[(0,d.jsx)("span",{onClick:function(){i(r+1)},children:(0,d.jsx)("img",{src:"./like.png",alt:"like"})}),r]})]})},w=e(6139),y=e(704),C=e(5304),b=e(2031),D=(0,C.D)(10),T=u.memo((function(s){var t=(0,P.Z)(s.posts).reverse().map((function(s){return(0,d.jsx)(N,{id:s.id,post:s.post,likesCount:s.likesCount},s.id)}));return(0,d.jsxs)("div",{className:S.myPosts,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{children:"My posts"}),(0,d.jsx)(A,{onSubmit:function(t){s.addPost(t.newPostText)}})]}),(0,d.jsx)("div",{className:S.posts,children:t})]})})),A=(0,y.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,d.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,d.jsx)(w.Z,{rows:"2",cols:"50",placeholder:"new post",name:"newPostText",component:b.g,validate:[C.C,D]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add post"})})]})})),I=T,U=e(8687),M=e(6070),R=(0,U.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,M.EO)(t))}}}))(I),z=function(s){return(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"./header.jpg",alt:"image"})}),(0,d.jsx)(f,{profile:s.profile}),(0,d.jsx)(g,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,d.jsx)(R,{profile:s.profile})]})},F=e(7689),B=e(7781);var E=function(s){(0,a.Z)(e,s);var t=(0,n.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,d.jsx)(z,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),G=(0,B.qC)((0,U.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:M.et,getStatus:M.lR,updateStatus:M.Nf}),(function(s){return function(t){var e={params:(0,F.UO)()};return(0,d.jsx)(s,(0,o.Z)((0,o.Z)({},t),{},{match:e}))}}))(E)}}]);
//# sourceMappingURL=663.2c6fe7e9.chunk.js.map