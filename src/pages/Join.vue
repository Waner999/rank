<template>
    <div id="app" class="m-rank-container">
        <Header></Header>
        <div class="m-rank-join">
            <div class="m-rank-header">
                <img class="u-logo" :src="LOGO" />
            </div>
            <div class="m-rank-content" v-if="isLogin">
                <div class="m-join m-join-team" v-if="!status">
                    <h1 class="m-join-title">报名入口</h1>
                    <el-alert
                        class="u-warning"
                        title="请务必正确填写所有资料，报名后不可取消，亦不可再更改资料。团长Q群：785597424"
                        type="warning"
                        show-icon
                    >
                    </el-alert>
                    <el-form
                        class="m-join-form"
                        ref="form"
                        :model="form"
                        label-width="80px"
                    >
                        <el-form-item label="报名活动">
                            <el-select
                                v-model="form.event_id"
                                placeholder="请选择活动"
                            >
                                <el-option
                                    v-for="event in events"
                                    :key="event.ID"
                                    :label="event.name"
                                    :value="event.ID"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="选择团队">
                            <el-select
                                v-model="form.team_id"
                                placeholder="请选择团队"
                            >
                                <el-option
                                    v-for="team in teams"
                                    :key="team.ID"
                                    :label="team.name"
                                    :value="team.ID"
                                >
                                </el-option>
                            </el-select>
                            <div class="u-tip" v-if="!teams || !teams.length">
                                还没有团队？<a
                                    href="/team/#/org/setting"
                                    target="_blank"
                                    >创建团队</a
                                >
                            </div>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input
                                v-model="form.phone"
                                placeholder="请输入正确的快递联系电话"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="邮寄地址">
                            <el-input
                                v-model="form.address"
                                placeholder="请输入正确的奖品邮寄地址"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="联系QQ">
                            <el-input
                                v-model="form.qq"
                                placeholder="请输入正确的QQ号码"
                            ></el-input>
                        </el-form-item>
                        <div class="u-btns">
                            <el-button
                                class="u-btn"
                                type="primary"
                                @click="submit"
                                :disabled="!canJoin"
                                >报名</el-button
                            >
                        </div>
                    </el-form>
                </div>
                <div class="m-join m-join-done" v-else>
                    <h1 class="u-title">已报名</h1>
                    <div>
                        <p>
                            活动：<b>{{ event_name }}</b>
                        </p>
                        <p>
                            团队：<strong>{{ team_name }}</strong>
                        </p>
                    </div>
                </div>
                <div class="u-tip">
                    <a href="/tool/?pid=18044#/" target="_blank"
                        ><i class="el-icon-info"></i>
                        <b>点击查看活动规则详情</b></a
                    >
                </div>
            </div>
            <div class="m-rank-content m-rank-null" v-else>
                请先<a href="/account/login/" target="_blank">登录</a>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import PICS from "@/assets/js/pics.js";
import { getEvents, joinEvent, hasJoined } from "@/service/event.js";
import { getMyTeams } from "@/service/team.js";
import _ from "lodash";
import User from '@jx3box/jx3box-common/js/user.js'
const ACTIVE_EVENT_ID = 1; //当前开启的活动

export default {
    name: "App",
    props: [],
    data: function() {
        return {
            LOGO: PICS.LOGO,
            form: {
                event_id: "",
                team_id: "",
                phone: "",
                address: "",
                qq: "",
            },
            events: [
                // {
                //     ID: 1,
                //     name: "奉天证道",
                //     status: 1,
                // },
            ],
            teams: [
                // {
                //     ID : 1,
                //     name : "诗画印象"
                // }
            ],
            status: false,
            isLogin : User.isLogin()
        };
    },
    computed: {
        event_name: function() {
            return _.get(this.events[0], "name");
        },
        event_id: function() {
            return _.get(this.events[0], "ID");
        },
        team_name: function() {
            return _.get(this.teams[0], "name");
        },
        team_id: function() {
            return _.get(this.teams[0], "ID");
        },
        // join_data: function() {
        //     return {
        //         event_id: this.event_id,
        //         team_id: this.team_id,
        //     };
        // },
        canJoin : function (){
            return this.event_id && this.team_id
        }
    },
    methods: {
        submit: function() {

            if(!this.team_id){
                this.$message({
                    message: "无效团队ID",
                    type: "error",
                });
                return
            }

            this.$alert(
                "报名后资料将不可再更改，更多咨询请联系认证团长Q群1048059072",
                "消息",
                {
                    confirmButtonText: "确定",
                    callback: (action) => {
                        if (action == "confirm") {
                            joinEvent(this.form).then((res) => {
                                this.$message({
                                    message: "报名成功",
                                    type: "success",
                                });
                                this.status = true;
                                this.$forceUpdate()
                            });
                        }
                    },
                }
            );
        },
        init: function() {
            this.loadEvents()
            this.loadTeams()
            this.checkJoin()
        },
        loadEvents: function() {
            // 获取开放的活动事件
            return getEvents({
                status: 1,
            }).then((res) => {
                this.events = res.data.data.list;
                this.form.event_id = this.event_id;
                this.$forceUpdate()
            });
        },
        loadTeams: function() {
            // 获取当前用户拥有的团队
            return getMyTeams().then((res) => {
                this.teams = res.data.data.list || [];
                this.form.team_id = this.team_id;
                this.$forceUpdate()
            });
        },
        checkJoin: function() {
            return hasJoined(ACTIVE_EVENT_ID).then((res) => {
                if (res.data.data.hasJoined) {
                    this.status = 1;
                    this.$forceUpdate()
                }
            });
        },
    },
    created: function() {
        this.init();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/join.less";
</style>
